from pathlib import Path

from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


OUTPUT = Path("output/pdf/japan-survival-phrase-cards-bsj-sample.pdf")
PUBLIC_OUTPUT = Path("public/downloads/japan-survival-phrase-cards-bsj-sample.pdf")

PAGE_W = 540
PAGE_H = 960
MARGIN = 42

BG = colors.HexColor("#f5f1e9")
CARD = colors.HexColor("#fffaf4")
INK = colors.HexColor("#223044")
MUTED = colors.HexColor("#666d66")
LIGHT = colors.HexColor("#8a8f87")
LINE = colors.HexColor("#d5ccbf")
ACCENT = colors.HexColor("#8b5e4c")
SOFT = colors.HexColor("#e8ded1")
NAVY = colors.HexColor("#102033")

FONT_PATH = "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"
FONT_NAME = "BSJUnicode"

pdfmetrics.registerFont(TTFont(FONT_NAME, FONT_PATH))


CARDS = [
    {
        "code": "R-01",
        "category": "Restaurant",
        "title": "Reservation",
        "jp": "予約しています。\n名前は＿＿＿＿です。",
        "en": "I have a reservation. The name is ____.",
        "romaji": "Yoyaku shite imasu. Namae wa ____ desu.",
        "note": "Show this when arriving at a restaurant, activity, or ryokan meal venue.",
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
        "jp": "アレルギーがあります。\nこの料理に＿＿＿＿は\n入っていますか？",
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


def draw_wrapped(c, text, x, y, max_chars, size, leading, color, font_name=FONT_NAME):
    c.setFillColor(color)
    c.setFont(font_name, size)
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


def label(c, x, y, text, fill=ACCENT):
    c.setFillColor(fill)
    c.setFont(FONT_NAME, 9)
    c.drawString(x, y, text.upper())


def footer(c, page_label):
    c.setStrokeColor(LINE)
    c.line(MARGIN, 64, PAGE_W - MARGIN, 64)
    c.setFillColor(LIGHT)
    c.setFont(FONT_NAME, 8)
    c.drawString(MARGIN, 42, "Bespoke Stay Japan - practical Japan travel notes")
    c.drawRightString(PAGE_W - MARGIN, 42, page_label)


def page_bg(c):
    c.setFillColor(BG)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)


def cover(c):
    page_bg(c)
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setStrokeColor(colors.HexColor("#2d3a48"))
    c.rect(34, 34, PAGE_W - 68, PAGE_H - 68, fill=0, stroke=1)
    c.setStrokeColor(ACCENT)
    c.setLineWidth(2)
    c.line(54, 160, 220, 160)

    c.setFillColor(colors.HexColor("#f5efe2"))
    c.setFont(FONT_NAME, 13)
    c.drawString(54, 840, "BESPOKE STAY JAPAN")
    c.setFont(FONT_NAME, 42)
    c.drawString(54, 760, "Japan Survival")
    c.drawString(54, 708, "Phrase Cards")

    draw_wrapped(
        c,
        "Phone-friendly Japanese cards to show staff in restaurants, hotels, stations, taxis, onsen, and practical travel moments.",
        54,
        642,
        43,
        14,
        23,
        colors.HexColor("#c8c0ae"),
    )

    c.setFillColor(CARD)
    c.roundRect(54, 270, 432, 245, 14, fill=1, stroke=0)
    c.setStrokeColor(colors.HexColor("#495767"))
    c.roundRect(54, 270, 432, 245, 14, fill=0, stroke=1)
    label(c, 78, 472, "sample card")
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 27)
    c.drawString(78, 415, "大きな荷物があります。")
    c.drawString(78, 373, "エレベーターはどこですか？")
    c.setFillColor(MUTED)
    c.setFont(FONT_NAME, 12)
    c.drawString(78, 318, "I have large luggage. Where is the elevator?")

    c.setFillColor(colors.HexColor("#c8c0ae"))
    c.setFont(FONT_NAME, 11)
    c.drawString(54, 124, "Free mini pack - save this PDF before your trip.")


def how_to(c):
    page_bg(c)
    label(c, MARGIN, 842, "how to use")
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 34)
    c.drawString(MARGIN, 785, "Show the card,")
    c.drawString(MARGIN, 744, "then confirm calmly.")

    steps = [
        ("1", "Save the PDF to your phone before your trip."),
        ("2", "Open the card for the situation: restaurant, hotel, station, taxi, onsen, or help."),
        ("3", "Show the Japanese text to staff. Keep the question short and specific."),
        ("4", "For allergies, medical issues, tattoos, bathing rules, and booking policies, reconfirm directly."),
    ]
    y = 660
    for number, text in steps:
        c.setFillColor(CARD)
        c.roundRect(MARGIN, y - 58, PAGE_W - MARGIN * 2, 76, 10, fill=1, stroke=0)
        c.setStrokeColor(LINE)
        c.roundRect(MARGIN, y - 58, PAGE_W - MARGIN * 2, 76, 10, fill=0, stroke=1)
        c.setFillColor(ACCENT)
        c.setFont(FONT_NAME, 18)
        c.drawString(66, y - 15, number)
        draw_wrapped(c, text, 106, y - 7, 45, 12, 18, MUTED)
        y -= 91

    c.setFillColor(CARD)
    c.roundRect(MARGIN, 122, PAGE_W - MARGIN * 2, 116, 10, fill=1, stroke=0)
    c.setStrokeColor(LINE)
    c.roundRect(MARGIN, 122, PAGE_W - MARGIN * 2, 116, 10, fill=0, stroke=1)
    label(c, 66, 204, "important")
    draw_wrapped(
        c,
        "These cards help communication. They do not guarantee policies, allergen-free food, medical safety, availability, or final service outcomes.",
        66,
        176,
        52,
        10,
        16,
        MUTED,
    )
    footer(c, "How to use")


def draw_japanese_phrase(c, jp):
    lines = jp.split("\n")
    size = 25 if max(len(line) for line in lines) > 22 else 27
    leading = 43
    y = 627 if len(lines) == 2 else 610
    c.setFillColor(INK)
    c.setFont(FONT_NAME, size)
    for line in lines:
        c.drawCentredString(PAGE_W / 2, y, line)
        y -= leading


def info_box(c, x, y, w, h, title, body, max_chars, body_size=11):
    c.setFillColor(CARD)
    c.roundRect(x, y, w, h, 9, fill=1, stroke=0)
    c.setStrokeColor(LINE)
    c.roundRect(x, y, w, h, 9, fill=0, stroke=1)
    label(c, x + 18, y + h - 27, title, LIGHT)
    draw_wrapped(c, body, x + 18, y + h - 51, max_chars, body_size, 16, MUTED)


def card_page(c, item):
    page_bg(c)
    c.setFillColor(SOFT)
    c.circle(482, 888, 78, fill=1, stroke=0)

    label(c, MARGIN, 842, item["code"])
    c.drawRightString(PAGE_W - MARGIN, 842, item["category"].upper())

    c.setFillColor(INK)
    c.setFont(FONT_NAME, 30)
    c.drawString(MARGIN, 792, item["title"])

    c.setFillColor(CARD)
    c.roundRect(MARGIN, 486, PAGE_W - MARGIN * 2, 230, 14, fill=1, stroke=0)
    c.setStrokeColor(LINE)
    c.roundRect(MARGIN, 486, PAGE_W - MARGIN * 2, 230, 14, fill=0, stroke=1)
    label(c, 66, 678, "show this")
    draw_japanese_phrase(c, item["jp"])

    info_box(c, MARGIN, 350, PAGE_W - MARGIN * 2, 96, "English meaning", item["en"], 58, 12)
    info_box(c, MARGIN, 236, PAGE_W - MARGIN * 2, 78, "Sound guide", item["romaji"], 64, 9)
    info_box(c, MARGIN, 116, PAGE_W - MARGIN * 2, 84, "Note", item["note"], 58, 9)

    footer(c, f"{item['code']} / Bespoke Stay Japan")


def validate_cards():
    required = ["エレベーター", "アレルギー", "タトゥー", "チェックイン"]
    joined = "\n".join(card["jp"] for card in CARDS)
    missing = [term for term in required if term not in joined]
    if missing:
        raise ValueError(f"Missing expected Japanese terms: {missing}")


def main():
    validate_cards()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
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
    PUBLIC_OUTPUT.write_bytes(OUTPUT.read_bytes())
    print(OUTPUT)
    print(PUBLIC_OUTPUT)


if __name__ == "__main__":
    main()
