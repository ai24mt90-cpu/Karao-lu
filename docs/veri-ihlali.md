# Veri İhlali Müdahale Planı

> Taslak — sorumlu isimleri ve iletişim bilgilerini doldurun, yılda bir gözden geçirin.
> Bu belge teknik bir eylem planıdır; hukuki değerlendirme için hukuk danışmanına başvurun.

## Kapsam
Sitede toplanan kişisel veriler:
- `contact_messages` (Supabase): ad, e-posta, telefon, konu, mesaj — iletişim formundan.
- Google Analytics: yalnızca çerez onayı veren ziyaretçiler için anonimleştirilmiş IP ve kullanım verisi.

## Sorumlular
| Rol | Ad | Telefon | Görev |
|---|---|---|---|
| İhlal sorumlusu (karar verici) | [doldurun] | [doldurun] | Bildirim kararı, Kurul ve kişilerle iletişim |
| Teknik sorumlu | [doldurun] | [doldurun] | Tespit, durdurma, log toplama |
| Yedek | [doldurun] | [doldurun] | Asıl kişilere ulaşılamazsa |

## Saat 0–4: Tespit ve durdurma (Teknik sorumlu)
1. Olayı ve tespit zamanını not edin (72 saatlik süre bu andan başlar).
2. Supabase → Project Settings → API: `anon` ve `service_role` anahtarlarını yenileyin; yeni `anon` anahtarını Vercel ortam değişkenine (`NEXT_PUBLIC_SUPABASE_ANON_KEY`) girip yeniden deploy edin.
3. Supabase → Authentication / Database: şüpheli kullanıcıları ve politikaları kontrol edin; gerekirse `contact_messages` için INSERT dışındaki tüm politikaları kaldırın.
4. Gerekirse `src/middleware.ts` içindeki `MAINTENANCE_MODE` değerini `true` yapıp siteyi bakım moduna alın.
5. Kanıtı koruyun: Supabase API/Postgres loglarını ve Vercel loglarını dışa aktarın (aşağıdaki "Log saklama" bölümü).

## Saat 4–24: Değerlendirme (Teknik sorumlu + İhlal sorumlusu)
- Etkilenen tablolar ve alanlar, kayıt sayısı, ihlalin başlangıç ve bitiş zamanı.
- Verinin kime ulaştığı / ulaşmış olabileceği, ihlalin nedeni.
- Etkilenen kişilerin listesi (e-posta adresleri `contact_messages` tablosundan).

## Saat 24–72: Bildirim (İhlal sorumlusu)
- Kişisel Verileri Koruma Kurulu'na bildirim: kvkk.gov.tr üzerindeki Veri İhlali Bildirim Formu — tespitten itibaren **en geç 72 saat** içinde. Bilgilerin tamamı hazır değilse eldekiyle bildirip sonra tamamlayın.
- Etkilenen kişilere makul en kısa sürede bildirim (e-posta).
- Gönderilen bildirimlerin kopyalarını saklayın.

## Sonrası
- Kök neden analizi ve alınan önlemler.
- Olayı ihlal kayıt defterine işleyin (tarih, kapsam, etkilenen kişi sayısı, alınan önlemler, bildirim tarihleri).
- Bu planı güncelleyin.

## Log saklama (önkoşul — şimdi ayarlanmalı)
Site sunucuda kalıcı log tutmuyor; ihlal anında geriye dönük inceleme için:
- **Vercel:** Project → Logs varsayılan olarak kısa süre saklar. Uzun saklama için Log Drains (ör. bir log servisine) kurun.
- **Supabase:** Logs Explorer'da API ve Postgres logları plana göre sınırlı süre tutulur; saklama süresini kontrol edin, gerekirse log drain kullanın.
- Hedef: en az 6 ay erişim ve hata kaydı.
