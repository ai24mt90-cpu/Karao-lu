"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";

export default function AdminSetupPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleCreateAdmin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");

        try {
            // 1. Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // 2. Insert into Supabase
            const { data, error } = await supabase
                .from("admins")
                .insert([
                    {
                        username: username,
                        password: hashedPassword,
                    },
                ])
                .select();

            if (error) {
                throw error;
            }

            setMessage("Admin başarıyla oluşturuldu! (" + username + ")");
            setUsername("");
            setPassword("");
        } catch (error: any) {
            console.error("Error creating admin:", error);
            setMessage("Hata: " + (error.message || "Bilinmeyen bir hata oluştu."));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Oluştur</h1>

                <form onSubmit={handleCreateAdmin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Kullanıcı Adı</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="admin"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="******"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                        {isLoading ? "Oluşturuluyor..." : "Admin Oluştur"}
                    </button>
                </form>

                {message && (
                    <div className={`mt-4 p-3 rounded-md text-sm ${message.startsWith("Hata") ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}>
                        {message}
                    </div>
                )}

                <div className="mt-8 text-xs text-gray-500 text-center border-t pt-4">
                    <p>⚠️ Bu sayfa sadece admin oluşturmak içindir.</p>
                    <p>İşiniz bitince bu sayfayı (`src/app/admin-setup/page.tsx`) silmeniz önerilir.</p>
                </div>
            </div>
        </div>
    );
}
