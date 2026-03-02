const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const dotenv = require('dotenv');

const envConfig = dotenv.parse(fs.readFileSync('.env.local'));
const supabase = createClient(envConfig.NEXT_PUBLIC_SUPABASE_URL, envConfig.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function checkProjects() {
    const { data: projects, error } = await supabase.from('projects').select('*').or('title.ilike.%bedesten%,title.ilike.%vali%,title.ilike.%tuşba%');
    console.log("Projects:", JSON.stringify(projects, null, 2));

    if (projects && projects.length > 0) {
        const { data: images } = await supabase.from('project_images').select('*').in('project_id', projects.map(p => p.id));
        console.log("Images:", JSON.stringify(images, null, 2));
    }
}

checkProjects();
