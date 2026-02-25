import { supabase } from "@/lib/supabase";
import HomeSlider from "@/components/home/HomeSlider";
import HomeContent from "@/components/home/HomeContent";

// Force dynamic rendering since we are fetching data
export const dynamic = "force-dynamic";

async function getData() {
  // Get featured projects (starred in admin panel)
  const { data: featuredData, error: featError } = await supabase
    .from("projects")
    .select("*")
    .eq("is_featured", true)
    .order("created_at", { ascending: false });

  let featuredProjects: any[] = [];
  let projectsWithImages: any[] = [];

  if (!featError && featuredData && featuredData.length > 0) {
    // Get cover images for these projects
    const projectIds = featuredData.map(p => p.id);
    const { data: imagesData } = await supabase
      .from("project_images")
      .select("project_id, image_url")
      .in("project_id", projectIds)
      .eq("is_cover", true);

    // Merge project data with images (images optional)
    projectsWithImages = featuredData.map(project => {
      const coverImage = imagesData?.find(img => img.project_id === project.id);
      return { ...project, image_url: coverImage?.image_url };
    });

    featuredProjects = projectsWithImages;
  }

  return { featuredProjects, projectsWithImages };
}

export default async function Home() {
  const { featuredProjects, projectsWithImages } = await getData();

  // Prepare slider data from featured projects
  const sliderData = projectsWithImages
    .filter(p => p.image_url)
    .map(p => ({
      image: p.image_url,
      title: p.title,
      subtitle: `${p.location} - ${p.year}`
    }));

  return (
    <div className="flex flex-col bg-background">
      {/* Hero Slider - Client Component */}
      <HomeSlider featuredProjects={sliderData} />

      {/* Rest of the homepage content - separated into Client Component to use translations without making the entire page Client-side */}
      <HomeContent featuredProjects={featuredProjects} />
    </div>
  );
}
