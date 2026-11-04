// Admin panelde BÜYÜK HARFLE girilen başlıkları Türkçe başlık düzenine çevirir
export function toTitleCaseTR(text: string): string {
    return text
        .toLocaleLowerCase("tr-TR")
        .replace(/(^|[\s(/-])(\p{L})/gu, (_, sep: string, ch: string) => sep + ch.toLocaleUpperCase("tr-TR"))
        .replace(/ (Ve|İle|Veya|De|Da|Ki) /g, (w) => w.toLocaleLowerCase("tr-TR"));
}
