"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TestDBPage() {
    const [status, setStatus] = useState<string>("Test ediliyor...");
    const [blogs, setBlogs] = useState<any[]>([]);
    const [envInfo, setEnvInfo] = useState<string>("");

    useEffect(() => {
        // Environment değişkenlerini kontrol et (güvenlik için sadece var/yok kontrolü)
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        setEnvInfo(`URL ${url ? "Var" : "YOK"} | Key ${key ? "Var" : "YOK"}`);

        const checkDB = async () => {
            try {
                const { data, error } = await supabase
                    .from("blogs")
                    .select("id, title, slug")
                    .limit(5);

                if (error) {
                    setStatus(`HATA: ${error.message}`);
                } else {
                    setStatus(`BAŞARILI! ${data.length} blog bulundu.`);
                    setBlogs(data);
                }
            } catch (e: any) {
                setStatus(`KRİTİK HATA: ${e.message}`);
            }
        };

        checkDB();
    }, []);

    return (
        <div className="min-h-screen pt-40 px-4">
            <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-red-200">
                <h1 className="text-2xl font-bold mb-4 text-red-600">Sistem Bağlantı Testi</h1>

                <div className="mb-4 p-4 bg-gray-100 rounded">
                    <p className="font-mono text-sm"><strong>Env Durumu:</strong> {envInfo}</p>
                </div>

                <div className={`mb-4 p-4 rounded ${status.includes("HATA") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                    <p className="font-bold">Bağlantı Sonucu:</p>
                    <p>{status}</p>
                </div>

                {blogs.length > 0 && (
                    <div>
                        <h3 className="font-bold mb-2">Bulunan Bloglar (Slug Kontrolü):</h3>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            {blogs.map(b => (
                                <li key={b.id}>
                                    <strong>{b.title}</strong>
                                    <br />
                                    <code className="bg-gray-100 px-1">/blog/{b.slug}</code>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
