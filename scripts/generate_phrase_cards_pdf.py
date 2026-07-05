from pathlib import Path

from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


OUTPUT = Path("output/pdf/japan-survival-phrase-cards-bsj-sample.pdf")
PAGE_W = 540
PAGE_H = 960

BG = colors.HexColor("#f5f1e9")
CARD = colors.HexColor("#fffaf2")
INK = colors.HexColor("#223044")
MUTED = colors.HexColor("#6f756f")
LINE = colors.HexColor("#d8d0c4")
ACCENT = colors.HexColor("#8b5e4c")
SOFT = colors.HexColor("#e8ded1")


FONT_PATH = "/System/Library/Fonts/Supplemental/AppleGothic.ttf"
FONT_NAME = "BSJSans"

pdfmetrics.registerFont(TTFont(FONT_NAME, FONT_PATH))


CARDS = [
    {
        "code": "R-01",
        "category": "Restaurant",
        "title": "Reservation",
        "jp": "予約しています。\n名前は＿＿＿＿です。",
        "en": "I have a reservation. The name is ____.",
        "romaji": "Yoyaku shite imasu. Namae wa ____ desu.",
        "note": "Show this when arriving at a restaurant, activity, or small ryokan meal venue.",
    },
    {
        "code": "R-02",
        "category": "Restaurant",
        "title": "Fish broth / dashi",
        "jp": "この料理には、魚、かつお節、\n煮干し、だしが使われていますか？",
        "en": "Does this dish contain fish, bonito flakes, dried sardines, or fish-based dashi?",
        "romaji": "Kono ryori ni wa sakana, katsuobushi, niboshi, dashi ga tsukawarete imasu ka?",
        "note": "Useful for vegetarian and pescatarian concerns. This does not guarantee allergen-free food.",
    },
    {
        "code": "R-03",
        "category": "Restaurant",
        "title": "No meat or fish",
        "jp": "肉と魚を食べられません。\n魚のだしも避けたいです。",
        "en": "I cannot eat meat or fish. I would also like to avoid fish-based dashi.",
        "romaji": "Niku to sakana o taberaremasen. Sakana no dashi mo saketai desu.",
        "note": "Vegetarian wording can be misunderstood in Japan. Mention fish broth clearly.",
    },
    {
        "code": "R-04",
        "category": "Restaurant",
        "title": "Allergy check",
        "jp": "アレルギーがあります。\nこの料理に＿＿＿＿は入っていますか？",
        "en": "I have an allergy. Does this dish contain ____?",
        "romaji": "Arerugi ga arimasu. Kono ryori ni ____ wa haitte imasu ka?",
        "note": "This card does not guarantee allergen-free food. For severe allergies, confirm carefully.",
    },
    {
        "code": "H-01",
        "category": "Hotel",
        "title": "Luggage before check-in",
        "jp": "チェックイン前に荷物を\n預けることはできますか？",
        "en": "Can I leave my luggage before check-in?",
        "romaji": "Chekku-in mae ni nimotsu o azukeru koto wa dekimasu ka?",
        "note": "Useful when arriving early or moving between cities with large bags.",
    },
    {
        "code": "H-02",
        "category": "Hotel",
        "title": "Private bath wording",
        "jp": "貸切風呂ですか？\nそれとも客室内のお風呂ですか？",
        "en": "Is it a reservable private bath, or a bath inside the guest room?",
        "romaji": "Kashikiri-buro desu ka? Soretomo kyakushitsunai no ofuro desu ka?",
        "note": "Private bath, family bath, and in-room bath can mean different things.",
    },
    {
        "code": "O-01",
        "category": "Onsen",
        "title": "Tattoo / public bath",
        "jp": "タトゥーがありますが、\n大浴場を利用できますか？",
        "en": "I have tattoos. Can I use the public bath?",
        "romaji": "Tatu ga arimasu ga, daiyokujo o riyo dekimasu ka?",
        "note": "Always confirm directly. Rules can vary by facility, date, and bath type.",
    },
    {
        "code": "O-02",
        "category": "Onsen",
        "title": "Tattoo cover",
        "jp": "タトゥーを隠せば、\n大浴場を利用できますか？",
        "en": "If I cover my tattoos, can I use the public bath?",
        "romaji": "Tatu o kakuseba, daiyokujo o riyo dekimasu ka?",
        "note": "Some facilities allow covers; some do not. Ask before planning around it.",
    },
    {
        "code": "T-01",
        "category": "Train",
        "title": "Right train",
        "jp": "この電車で＿＿＿＿まで\n行けますか？",
        "en": "Can I get to ____ on this train?",
        "romaji": "Kono densha de ____ made ikemasu ka?",
        "note": "Useful before boarding local trains, limited express trains, or platform changes.",
    },
    {
        "code": "T-02",
        "category": "Station",
        "title": "Elevator route",
        "jp": "大きな荷物があります。\nエレベーターはどこですか？",
        "en": "I have large luggage. Where is the elevator?",
        "romaji": "Okina nimotsu ga arimasu. Erebeta wa doko desu ka?",
        "note": "Useful in stations where stairs and escalators are easier to find than elevators.",
    },
    {
        "code": "X-01",
        "category": "Taxi",
        "title": "Taxi destination",
        "jp": "この住所までお願いします。\n＿＿＿＿＿＿＿＿",
        "en": "Please take me to this address: ____.",
        "romaji": "Kono jusho made onegai shimasu.",
        "note": "Show the address in Japanese if possible. Hotel names alone can be ambiguous.",
    },
    {
        "code": "E-01",
        "category": "Emergency",
        "title": "Feeling sick",
        "jp": "体調が悪いです。\n病院かクリニックに行きたいです。",
        "en": "I feel sick. I would like to go to a hospital or clinic.",
        "romaji": "Taicho ga warui desu. Byoin ka kurinikku ni ikitai desu.",
        "note": "For emergencies, call local emergency services or ask nearby staff for urgent help.",
    },
]


def draw_wrapped(c, text, x, y, max_chars, font, size, leading, color):
    c.setFillColor(color)
    c.setFont(font, size)
    lines = []
    for raw in text.split("\n"):
        line = ""
        for word in raw.split(" "):
            candidate = word if not line else f"{line} {word}"
            if len(candidate) > max_chars and line:
                lines.append(line)
                line = word
            else:
                line = candidate
        lines.append(line)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def footer(c, page_label):
    c.setStrokeColor(LINE)
    c.line(54, 72, PAGE_W - 54, 72)
    c.setFillColor(MUTED)
    c.setFont(FONT_NAME, 8)
    c.drawString(54, 48, "A free travel tool by Bespoke Stay Japan")
    c.drawRightString(PAGE_W - 54, 48, page_label)


def cover(c):
    c.setFillColor(BG)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(SOFT)
    c.circle(450, 820, 150, fill=1, stroke=0)
    c.circle(88, 145, 115, fill=1, stroke=0)

    c.setFillColor(INK)
    c.setFont(FONT_NAME, 13)
    c.drawString(54, 835, "BESPOKE STAY JAPAN")
    c.setFont(FONT_NAME, 42)
    c.drawString(54, 760, "Japan Survival")
    c.drawString(54, 708, "Phrase Cards")

    c.setFillColor(MUTED)
    c.setFont(FONT_NAME, 17)
    c.drawString(54, 645, "Show-this-card Japanese for real travel moments.")
    draw_wrapped(
        c,
        "Restaurants, hotels, luggage, trains, taxis, onsen, and basic help. Save this PDF to your phone before you travel.",
        54,
        594,
        44,
        FONT_NAME,
        14,
        24,
        MUTED,
    )

    c.setFillColor(CARD)
    c.roundRect(70, 230, 400, 245, 22, fill=1, stroke=0)
    c.setStrokeColor(LINE)
    c.roundRect(70, 230, 400, 245, 22, fill=0, stroke=1)
    c.setFillColor(ACCENT)
    c.setFont(FONT_NAME, 10)
    c.drawString(100, 426, "SAMPLE CARD")
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 26)
    c.drawString(100, 370, "大きな荷物があります。")
    c.drawString(100, 330, "エレベーターはどこですか？")
    c.setFillColor(MUTED)
    c.setFont(FONT_NAME, 12)
    c.drawString(100, 282, "I have large luggage. Where is the elevator?")
    footer(c, "Free mini pack")


def how_to(c):
    c.setFillColor(BG)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 13)
    c.drawString(54, 835, "HOW TO USE")
    c.setFont(FONT_NAME, 34)
    c.drawString(54, 774, "Use it as a")
    c.drawString(54, 730, "show-this-card tool.")

    steps = [
        ("1", "Save this PDF to your phone before your trip."),
        ("2", "Open the card for the situation: restaurant, hotel, station, taxi, onsen, or help."),
        ("3", "Show the Japanese text to staff. Keep your question short and specific."),
        ("4", "For allergies, medical issues, tattoos, bathing rules, and booking policies, always reconfirm directly."),
    ]
    y = 635
    for number, text in steps:
        c.setFillColor(CARD)
        c.roundRect(54, y - 58, 432, 78, 14, fill=1, stroke=0)
        c.setStrokeColor(LINE)
        c.roundRect(54, y - 58, 432, 78, 14, fill=0, stroke=1)
        c.setFillColor(ACCENT)
        c.setFont(FONT_NAME, 18)
        c.drawString(78, y - 16, number)
        draw_wrapped(c, text, 116, y - 8, 44, FONT_NAME, 12, 19, MUTED)
        y -= 98

    c.setFillColor(INK)
    c.setFont(FONT_NAME, 13)
    c.drawString(54, 172, "Important")
    draw_wrapped(
        c,
        "These cards help communication. They do not guarantee policies, allergen-free food, medical safety, availability, or final service outcomes.",
        54,
        145,
        56,
        FONT_NAME,
        11,
        18,
        MUTED,
    )
    footer(c, "How to use")


def card_page(c, item):
    c.setFillColor(BG)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(SOFT)
    c.circle(470, 872, 104, fill=1, stroke=0)

    c.setFillColor(ACCENT)
    c.setFont(FONT_NAME, 10)
    c.drawString(54, 835, item["code"])
    c.drawRightString(PAGE_W - 54, 835, item["category"].upper())

    c.setFillColor(INK)
    c.setFont(FONT_NAME, 34)
    c.drawString(54, 770, item["title"])

    c.setFillColor(CARD)
    c.roundRect(44, 420, 452, 265, 20, fill=1, stroke=0)
    c.setStrokeColor(LINE)
    c.roundRect(44, 420, 452, 265, 20, fill=0, stroke=1)
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 25)
    y = 615
    for line in item["jp"].split("\n"):
        c.drawCentredString(PAGE_W / 2, y, line)
        y -= 45

    c.setFillColor(INK)
    c.setFont(FONT_NAME, 12)
    c.drawString(54, 348, "English")
    draw_wrapped(c, item["en"], 54, 320, 56, FONT_NAME, 13, 21, MUTED)

    c.setFillColor(INK)
    c.setFont(FONT_NAME, 12)
    c.drawString(54, 250, "Romaji")
    draw_wrapped(c, item["romaji"], 54, 222, 60, FONT_NAME, 10, 17, MUTED)

    c.setFillColor(CARD)
    c.roundRect(54, 112, 432, 70, 12, fill=1, stroke=0)
    c.setStrokeColor(LINE)
    c.roundRect(54, 112, 432, 70, 12, fill=0, stroke=1)
    draw_wrapped(c, f"Note: {item['note']}", 76, 154, 54, FONT_NAME, 9, 15, MUTED)
    footer(c, f"{item['code']} / Bespoke Stay Japan")


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=(PAGE_W, PAGE_H))
    c.setTitle("Japan Survival Phrase Cards - Bespoke Stay Japan sample")
    cover(c)
    c.showPage()
    how_to(c)
    c.showPage()
    for item in CARDS:
        card_page(c, item)
        c.showPage()
    c.save()
    print(OUTPUT)


if __name__ == "__main__":
    main()
