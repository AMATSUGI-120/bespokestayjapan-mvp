from pathlib import Path

from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


PAGE_W = 612
PAGE_H = 792
MARGIN = 48

BG = colors.HexColor("#f5f1e9")
CARD = colors.HexColor("#fffaf4")
INK = colors.HexColor("#223044")
MUTED = colors.HexColor("#666d66")
LIGHT = colors.HexColor("#8a8f87")
LINE = colors.HexColor("#d5ccbf")
ACCENT = colors.HexColor("#8b5e4c")
NAVY = colors.HexColor("#102033")
SOFT = colors.HexColor("#e8ded1")

FONT_PATH = "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"
FONT_NAME = "BSJUnicode"

pdfmetrics.registerFont(TTFont(FONT_NAME, FONT_PATH))

OUTPUT_DIR = Path("output/pdf")
PUBLIC_DIR = Path("public/downloads")


def ensure_dirs():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)


def page_bg(c):
    c.setFillColor(BG)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)


def label(c, x, y, text, fill=ACCENT):
    c.setFillColor(fill)
    c.setFont(FONT_NAME, 9)
    c.drawString(x, y, text.upper())


def wrap_lines(text, width_chars):
    lines = []
    for raw in text.split("\n"):
        if " " not in raw and len(raw) > width_chars:
            for i in range(0, len(raw), width_chars):
                lines.append(raw[i : i + width_chars])
            continue

        words = raw.split(" ")
        line = ""
        for word in words:
            if len(word) > width_chars:
                if line:
                    lines.append(line)
                    line = ""
                for i in range(0, len(word), width_chars):
                    chunk = word[i : i + width_chars]
                    if len(chunk) == width_chars:
                        lines.append(chunk)
                    else:
                        line = chunk
                continue

            candidate = word if not line else f"{line} {word}"
            if len(candidate) > width_chars and line:
                lines.append(line)
                line = word
            else:
                line = candidate
        lines.append(line)
    return lines


def draw_wrapped(c, text, x, y, width_chars, size, leading, color=MUTED):
    if any(ord(ch) > 127 for ch in text):
        width_chars = max(24, int(width_chars * 0.42))

    c.setFillColor(color)
    c.setFont(FONT_NAME, size)
    for line in wrap_lines(text, width_chars):
        c.drawString(x, y, line)
        y -= leading
    return y


def footer(c, page, total):
    c.setStrokeColor(LINE)
    c.line(MARGIN, 54, PAGE_W - MARGIN, 54)
    c.setFillColor(LIGHT)
    c.setFont(FONT_NAME, 8)
    c.drawString(MARGIN, 35, "Bespoke Stay Japan - practical Japan stay notes")
    c.drawRightString(PAGE_W - MARGIN, 35, f"{page}/{total}")


def cover(c, title_lines, subtitle, eyebrow):
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setStrokeColor(colors.HexColor("#2d3a48"))
    c.rect(34, 34, PAGE_W - 68, PAGE_H - 68, fill=0, stroke=1)
    c.setFillColor(colors.HexColor("#f5efe2"))
    c.setFont(FONT_NAME, 12)
    c.drawString(MARGIN, 690, "BESPOKE STAY JAPAN")
    label(c, MARGIN, 650, eyebrow, colors.HexColor("#c8a083"))
    c.setFont(FONT_NAME, 40)
    y = 598
    for line in title_lines:
        c.drawString(MARGIN, y, line)
        y -= 48
    draw_wrapped(c, subtitle, MARGIN, y - 10, 62, 12, 19, colors.HexColor("#c8c0ae"))
    c.setFillColor(CARD)
    c.roundRect(MARGIN, 190, PAGE_W - (MARGIN * 2), 150, 10, fill=1, stroke=0)
    c.setStrokeColor(colors.HexColor("#495767"))
    c.roundRect(MARGIN, 190, PAGE_W - (MARGIN * 2), 150, 10, fill=0, stroke=1)
    label(c, MARGIN + 22, 304, "sample")
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 18)
    c.drawString(MARGIN + 22, 266, "Use this as a planning aid,")
    c.drawString(MARGIN + 22, 240, "not as a guarantee.")
    draw_wrapped(
        c,
        "Rules, availability, and staff answers can change. Confirm directly before booking when a detail matters.",
        MARGIN + 22,
        214,
        66,
        10,
        14,
        MUTED,
    )


def section_header(c, eyebrow, title_lines, intro):
    page_bg(c)
    label(c, MARGIN, 708, eyebrow)
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 31)
    y = 660
    for line in title_lines:
        c.drawString(MARGIN, y, line)
        y -= 36
    draw_wrapped(c, intro, MARGIN, y - 4, 76, 11, 17, MUTED)


def note_box(c, x, y, title, text, h=94):
    c.setFillColor(CARD)
    c.roundRect(x, y - h, PAGE_W - (MARGIN * 2), h, 8, fill=1, stroke=0)
    c.setStrokeColor(LINE)
    c.roundRect(x, y - h, PAGE_W - (MARGIN * 2), h, 8, fill=0, stroke=1)
    label(c, x + 18, y - 28, title)
    draw_wrapped(c, text, x + 18, y - 50, 74, 10.5, 15, MUTED)


def checklist_row(c, y, title, text):
    c.setFillColor(CARD)
    c.roundRect(MARGIN, y - 58, PAGE_W - (MARGIN * 2), 68, 6, fill=1, stroke=0)
    c.setStrokeColor(LINE)
    c.roundRect(MARGIN, y - 58, PAGE_W - (MARGIN * 2), 68, 6, fill=0, stroke=1)
    c.setStrokeColor(ACCENT)
    c.rect(MARGIN + 16, y - 20, 12, 12, fill=0, stroke=1)
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 13)
    c.drawString(MARGIN + 42, y - 12, title)
    draw_wrapped(c, text, MARGIN + 42, y - 31, 70, 9.5, 13, MUTED)


def template_box(c, y, title, text, h=124):
    c.setFillColor(CARD)
    c.roundRect(MARGIN, y - h, PAGE_W - (MARGIN * 2), h, 8, fill=1, stroke=0)
    c.setStrokeColor(LINE)
    c.roundRect(MARGIN, y - h, PAGE_W - (MARGIN * 2), h, 8, fill=0, stroke=1)
    label(c, MARGIN + 18, y - 28, title)
    draw_wrapped(c, text, MARGIN + 18, y - 52, 77, 10, 14, MUTED)


def build_tattoo_inquiry():
    path = OUTPUT_DIR / "tattoo-friendly-stay-inquiry-template-bsj-sample.pdf"
    c = canvas.Canvas(str(path), pagesize=(PAGE_W, PAGE_H))
    cover(
        c,
        ["Tattoo Stay", "Inquiry", "Template"],
        "Short hotel questions for tattooed travelers who need bath policy clarity before booking in Japan.",
        "hotel message sample",
    )
    c.showPage()
    section_header(
        c,
        "before you ask",
        ["Clarify the bath", "type first."],
        "Tattoo-friendly can mean different things. Ask about the exact bath you plan to use.",
    )
    items = [
        ("Public bath", "Can guests with tattoos use the public bath? Are covers required or accepted?"),
        ("Private bath", "Is there a reservable private bath, family bath, or paid private bath option?"),
        ("Room bath", "Does the room have its own bath or shower that can be used privately?"),
        ("Policy proof", "Is the answer written on an official page, or should you keep the email reply?"),
        ("Day-of risk", "Can rules change depending on date, bath area, staff, or other guests?"),
    ]
    y = 512
    for title, text in items:
        checklist_row(c, y, title, text)
        y -= 82
    footer(c, 2, 3)
    c.showPage()
    section_header(
        c,
        "copy and send",
        ["Email template"],
        "Replace the bracketed details. Keep the message short and easy for hotel staff to answer.",
    )
    template_box(
        c,
        524,
        "English",
        "Hello. I am considering staying at your property on [date]. I have tattoos. Could you please confirm whether I can use the public bath? If not, is there a private bath or in-room bath option that would be suitable?",
        142,
    )
    template_box(
        c,
        348,
        "Japanese",
        "宿泊を検討しています。タトゥーがありますが、大浴場を利用できますか？もし難しい場合、貸切風呂または客室内のお風呂を利用できるプランはありますか？",
        128,
    )
    note_box(
        c,
        MARGIN,
        178,
        "important",
        "An email reply is useful, but it is not a guarantee. Reconfirm at booking or check-in if the bath policy is essential to your trip.",
        92,
    )
    footer(c, 3, 3)
    c.save()
    return path


def build_bath_comparison():
    path = OUTPUT_DIR / "private-bath-comparison-sheet-bsj-sample.pdf"
    c = canvas.Canvas(str(path), pagesize=(PAGE_W, PAGE_H))
    cover(
        c,
        ["Private Bath", "Comparison", "Sheet"],
        "A quick guide to the difference between public baths, reservable private baths, and in-room baths in Japan.",
        "bath wording sample",
    )
    c.showPage()
    section_header(
        c,
        "bath types",
        ["Private does not", "always mean the", "same thing."],
        "Use this comparison before assuming a hotel or ryokan bath will work for privacy, tattoos, family use, or comfort.",
    )
    y = 488
    rows = [
        ("Public bath", "Shared with other guests. Tattoo rules and etiquette may be strict. Check before relying on it."),
        ("Reservable private bath", "A shared facility used privately for a time slot. May require booking, extra fee, or same-day reservation."),
        ("In-room bath", "Inside your guest room. Usually the easiest option for privacy, but size and style vary widely."),
        ("Room with open-air bath", "Often premium. Confirm whether it is fully private and whether bathing rules still apply."),
        ("Family bath", "Often similar to reservable private bath. Ask whether couples, families, or solo travelers can reserve it."),
    ]
    for title, text in rows:
        checklist_row(c, y, title, text)
        y -= 82
    footer(c, 2, 2)
    c.save()
    return path


def build_luggage_sheet():
    path = OUTPUT_DIR / "japan-luggage-planning-mini-sheet-bsj-sample.pdf"
    c = canvas.Canvas(str(path), pagesize=(PAGE_W, PAGE_H))
    cover(
        c,
        ["Japan Luggage", "Planning", "Mini Sheet"],
        "A practical checklist for travelers with large bags, city transfers, luggage delivery, or early arrivals.",
        "luggage sample",
    )
    c.showPage()
    section_header(
        c,
        "movement check",
        ["Plan the bag", "before the route."],
        "Japan is easy to travel in until your luggage changes the route. Check these points before choosing a stay.",
    )
    y = 512
    rows = [
        ("Before check-in", "Can the hotel store luggage before check-in? Until what time? Is the front desk staffed?"),
        ("After check-out", "Can the hotel store luggage after check-out? Is there a same-day pickup deadline?"),
        ("Delivery acceptance", "Can the hotel receive takkyubin luggage before arrival? What name and date should be written?"),
        ("Station route", "Is the nearest station exit elevator-friendly? Are there stairs between the platform and hotel?"),
        ("Oversized luggage", "For Shinkansen routes, check oversized luggage rules before buying tickets or boarding."),
    ]
    for title, text in rows:
        checklist_row(c, y, title, text)
        y -= 82
    footer(c, 2, 3)
    c.showPage()
    section_header(
        c,
        "copy and send",
        ["Hotel luggage", "message"],
        "Use this when luggage handling affects your arrival or transfer plan.",
    )
    template_box(
        c,
        516,
        "English",
        "Hello. I will arrive before check-in with large luggage. Is it possible to leave luggage before check-in? Also, can the hotel receive luggage delivery before my arrival? If yes, what address and name format should I use?",
        146,
    )
    template_box(
        c,
        332,
        "Japanese",
        "チェックイン前に大きな荷物を預けることはできますか？また、到着前に宅配便で荷物をホテルへ送ることは可能ですか？可能な場合、宛名の書き方を教えてください。",
        132,
    )
    footer(c, 3, 3)
    c.save()
    return path


def build_dietary_sheet():
    path = OUTPUT_DIR / "dietary-restriction-check-sheet-bsj-sample.pdf"
    c = canvas.Canvas(str(path), pagesize=(PAGE_W, PAGE_H))
    cover(
        c,
        ["Dietary", "Restriction", "Check Sheet"],
        "A Japan-specific food and hotel meal checklist for vegetarian, vegan, halal, allergy, and other food concerns.",
        "food needs sample",
    )
    c.showPage()
    section_header(
        c,
        "food notes",
        ["Ask about", "hidden ingredients."],
        "In Japan, a dish can look suitable but still include fish-based dashi, bonito flakes, dried sardines, meat extract, or shared preparation.",
    )
    y = 512
    rows = [
        ("Fish-based dashi", "Vegetable dishes, soup, sauce, rice, and noodles may still use fish broth or bonito flakes."),
        ("Allergy limits", "A restaurant or hotel may not be able to prevent cross-contact. Ask clearly and avoid guarantees."),
        ("Breakfast plans", "Hotel breakfast may be buffet-only, set menu, or difficult to modify. Confirm before relying on it."),
        ("Ryokan meals", "Traditional dinners can be hard to change. Ask early, not at check-in."),
        ("Nearby alternatives", "If the hotel cannot adapt meals, check nearby restaurants, convenience stores, or kitchen access."),
    ]
    for title, text in rows:
        checklist_row(c, y, title, text)
        y -= 82
    footer(c, 2, 3)
    c.showPage()
    section_header(
        c,
        "copy and send",
        ["Food inquiry", "template"],
        "Use this for hotel meals or restaurants. For severe allergies, confirm in detail and use professional medical judgment.",
    )
    template_box(
        c,
        516,
        "English",
        "Hello. I have [dietary restriction / allergy]. Could you please confirm whether the meal can avoid [ingredient]? I also need to avoid fish-based dashi, bonito flakes, dried sardines, and meat extract if possible.",
        146,
    )
    template_box(
        c,
        332,
        "Japanese",
        "食事制限／アレルギーがあります。料理に＿＿＿＿を使わない対応は可能ですか？可能であれば、魚のだし、かつお節、煮干し、肉エキスも避けたいです。",
        132,
    )
    note_box(
        c,
        MARGIN,
        166,
        "safety note",
        "This sample does not guarantee allergy-safe food. For severe allergies, contact the facility directly and make your own risk decision.",
        88,
    )
    footer(c, 3, 3)
    c.save()
    return path


def build_kansai_tattoo_starter():
    path = OUTPUT_DIR / "kansai-tattoo-stay-starter-list-bsj-sample.pdf"
    c = canvas.Canvas(str(path), pagesize=(PAGE_W, PAGE_H))
    cover(
        c,
        ["Kansai Tattoo", "Stay Starter", "List"],
        "A sample planning worksheet for tattooed travelers comparing Osaka, Kyoto, Nara, Kobe, and nearby stay options.",
        "starter list sample",
    )
    c.showPage()
    section_header(
        c,
        "shortlist framework",
        ["Do not start", "with hotel names."],
        "Start with the bath outcome you need. Then compare areas, routes, and confirmation status.",
    )
    y = 512
    rows = [
        ("Outcome needed", "Public bath OK, cover OK, private bath OK, room bath enough, or no bath requirement."),
        ("City fit", "Osaka for transport and food, Kyoto for ryokan and culture, Nara/Kobe for slower side trips."),
        ("Bath evidence", "Official page, hotel email, booking note, guest review, or not yet confirmed."),
        ("Risk level", "Low if written and specific. Medium if email-only. High if vague or review-based."),
        ("Backup plan", "Choose a second stay or nearby bath option if the policy is important to the trip."),
    ]
    for title, text in rows:
        checklist_row(c, y, title, text)
        y -= 82
    footer(c, 2, 3)
    c.showPage()
    section_header(
        c,
        "sample columns",
        ["Build your", "comparison sheet."],
        "Use these columns in Google Sheets or Notion before adding hotels to your final shortlist.",
    )
    columns = [
        ("Stay name", "Hotel or ryokan name"),
        ("Area", "City, station, neighborhood"),
        ("Bath type", "Public, private, room bath, none"),
        ("Tattoo status", "OK, cover OK, private only, unclear, no"),
        ("Evidence", "Official page, email, review, phone note"),
        ("Need to confirm", "Exact question before booking"),
        ("Booking/reference link", "Official, OTA, map, or source link"),
    ]
    y = 504
    for title, text in columns:
        checklist_row(c, y, title, text)
        y -= 58
    footer(c, 3, 3)
    c.save()
    return path


BUILDERS = [
    build_tattoo_inquiry,
    build_bath_comparison,
    build_luggage_sheet,
    build_dietary_sheet,
    build_kansai_tattoo_starter,
]


def main():
    ensure_dirs()
    for build in BUILDERS:
        path = build()
        public_path = PUBLIC_DIR / path.name
        public_path.write_bytes(path.read_bytes())
        print(f"Wrote {path}")
        print(f"Wrote {public_path}")


if __name__ == "__main__":
    main()
