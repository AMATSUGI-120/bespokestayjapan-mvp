from pathlib import Path

from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


OUTPUT = Path("output/pdf/japan-stay-pre-booking-checklist-bsj-sample.pdf")
PUBLIC_OUTPUT = Path("public/downloads/japan-stay-pre-booking-checklist-bsj-sample.pdf")

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
SOFT = colors.HexColor("#e8ded1")
NAVY = colors.HexColor("#102033")

FONT_PATH = "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"
FONT_NAME = "BSJUnicode"

pdfmetrics.registerFont(TTFont(FONT_NAME, FONT_PATH))


def ensure_dirs():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_OUTPUT.parent.mkdir(parents=True, exist_ok=True)


def page_bg(c):
    c.setFillColor(BG)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)


def label(c, x, y, text, fill=ACCENT):
    c.setFillColor(fill)
    c.setFont(FONT_NAME, 9)
    c.drawString(x, y, text.upper())


def draw_wrapped(c, text, x, y, width_chars, size, leading, color=INK):
    c.setFillColor(color)
    c.setFont(FONT_NAME, size)
    for raw in text.split("\n"):
        words = raw.split(" ")
        line = ""
        for word in words:
            candidate = word if not line else f"{line} {word}"
            if len(candidate) > width_chars and line:
                c.drawString(x, y, line)
                y -= leading
                line = word
            else:
                line = candidate
        c.drawString(x, y, line)
        y -= leading
    return y


def footer(c, page):
    c.setStrokeColor(LINE)
    c.line(MARGIN, 54, PAGE_W - MARGIN, 54)
    c.setFillColor(LIGHT)
    c.setFont(FONT_NAME, 8)
    c.drawString(MARGIN, 35, "Bespoke Stay Japan - researched stay notes for real travel needs")
    c.drawRightString(PAGE_W - MARGIN, 35, f"{page}/5")


def check_row(c, x, y, title, text, tone=ACCENT):
    c.setFillColor(CARD)
    c.roundRect(x, y - 58, PAGE_W - (MARGIN * 2), 68, 6, fill=1, stroke=0)
    c.setStrokeColor(LINE)
    c.roundRect(x, y - 58, PAGE_W - (MARGIN * 2), 68, 6, fill=0, stroke=1)
    c.setStrokeColor(tone)
    c.setLineWidth(1.4)
    c.rect(x + 16, y - 20, 12, 12, fill=0, stroke=1)
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 13)
    c.drawString(x + 42, y - 12, title)
    draw_wrapped(c, text, x + 42, y - 31, 70, 9.5, 13, MUTED)


def note_box(c, x, y, title, text, h=94):
    c.setFillColor(CARD)
    c.roundRect(x, y - h, PAGE_W - (MARGIN * 2), h, 8, fill=1, stroke=0)
    c.setStrokeColor(LINE)
    c.roundRect(x, y - h, PAGE_W - (MARGIN * 2), h, 8, fill=0, stroke=1)
    label(c, x + 18, y - 28, title)
    draw_wrapped(c, text, x + 18, y - 50, 74, 10.5, 15, MUTED)


def cover(c):
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setStrokeColor(colors.HexColor("#2d3a48"))
    c.rect(34, 34, PAGE_W - 68, PAGE_H - 68, fill=0, stroke=1)

    c.setFillColor(colors.HexColor("#f5efe2"))
    c.setFont(FONT_NAME, 12)
    c.drawString(MARGIN, 690, "BESPOKE STAY JAPAN")
    c.setFont(FONT_NAME, 43)
    c.drawString(MARGIN, 620, "Japan Stay")
    c.drawString(MARGIN, 568, "Pre-Booking")
    c.drawString(MARGIN, 516, "Checklist")

    draw_wrapped(
        c,
        "A practical one-page-at-a-time checklist for choosing Japan stays when tattoos, luggage, food needs, private baths, pets, family travel, or long-stay comfort matter.",
        MARGIN,
        458,
        62,
        13,
        21,
        colors.HexColor("#c8c0ae"),
    )

    c.setFillColor(CARD)
    c.roundRect(MARGIN, 196, PAGE_W - (MARGIN * 2), 180, 10, fill=1, stroke=0)
    c.setStrokeColor(colors.HexColor("#495767"))
    c.roundRect(MARGIN, 196, PAGE_W - (MARGIN * 2), 180, 10, fill=0, stroke=1)
    label(c, MARGIN + 22, 340, "sample checklist")
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 18)
    c.drawString(MARGIN + 22, 300, "Before you book, confirm the details")
    c.drawString(MARGIN + 22, 274, "that booking sites often hide.")
    draw_wrapped(
        c,
        "Use this as a calm final check before relying on a stay for a specific travel need.",
        MARGIN + 22,
        238,
        58,
        11,
        16,
        MUTED,
    )

    c.setFillColor(colors.HexColor("#c8c0ae"))
    c.setFont(FONT_NAME, 10)
    c.drawString(MARGIN, 112, "Free BSJ sample - save before comparing hotels or ryokan.")


def page_one(c):
    page_bg(c)
    label(c, MARGIN, 708, "quick scan")
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 32)
    c.drawString(MARGIN, 660, "The 5 checks before")
    c.drawString(MARGIN, 624, "you trust a listing.")
    draw_wrapped(
        c,
        "If any item affects your trip, do not rely only on a short booking-site label. Look for the policy, then confirm directly before booking.",
        MARGIN,
        586,
        76,
        11,
        17,
        MUTED,
    )

    rows = [
        ("Bath and tattoo rules", "Public bath, private bath, room bath, cover stickers, time limits, and facility-specific rules."),
        ("Luggage flow", "Storage before check-in, delivery acceptance, elevator route, station distance, and large bag movement."),
        ("Food restrictions", "Breakfast contents, fish-based dashi, allergies, halal, vegan, vegetarian, and nearby meal options."),
        ("Room practicality", "Kitchen, laundry, workspace, bed layout, children, pets, stairs, and noise concerns."),
        ("Language and support", "English pages, email response, check-in method, emergency contact, and staff support level."),
    ]
    y = 512
    for title, text in rows:
        check_row(c, MARGIN, y, title, text)
        y -= 82
    footer(c, 2)


def page_two(c):
    page_bg(c)
    label(c, MARGIN, 708, "stay condition notes")
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 31)
    c.drawString(MARGIN, 660, "What to confirm by")
    c.drawString(MARGIN, 624, "travel need.")
    draw_wrapped(
        c,
        "Use these prompts when a stay looks promising but the public page is too vague.",
        MARGIN,
        588,
        72,
        11,
        17,
        MUTED,
    )

    note_box(
        c,
        MARGIN,
        532,
        "tattoos and baths",
        "Ask whether tattoos are allowed in the public bath, allowed with covers, or only possible through a reservable private bath or in-room bath.",
        96,
    )
    note_box(
        c,
        MARGIN,
        410,
        "private bath wording",
        "Confirm whether the bath is inside the guest room, a reservable family bath, a paid private bath, or simply a shared bath with private time slots.",
        96,
    )
    note_box(
        c,
        MARGIN,
        288,
        "food needs",
        "For vegetarian, vegan, halal, and allergy concerns, ask about fish broth, bonito flakes, dried sardines, shared cooking surfaces, and breakfast changes.",
        100,
    )
    note_box(
        c,
        MARGIN,
        162,
        "luggage and access",
        "Check luggage storage, luggage delivery acceptance, elevators, stairs, station transfer difficulty, and whether the route is realistic with large bags.",
        94,
    )
    footer(c, 3)


def page_three(c):
    page_bg(c)
    label(c, MARGIN, 708, "copy and send")
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 31)
    c.drawString(MARGIN, 660, "Simple inquiry")
    c.drawString(MARGIN, 624, "templates.")
    draw_wrapped(
        c,
        "Short, specific questions usually work better than long explanations. Replace the bracketed parts before sending.",
        MARGIN,
        588,
        74,
        11,
        17,
        MUTED,
    )

    templates = [
        (
            "Hotel bath / tattoo check",
            "Hello. I am considering staying at your property on [date]. I have tattoos. Could you please confirm whether I can use the public bath? If not, is there a private bath or in-room bath option?",
        ),
        (
            "Luggage check",
            "Hello. I will arrive before check-in with large luggage. Is it possible to leave luggage before check-in? Also, can the hotel receive luggage delivery before my arrival?",
        ),
        (
            "Food restriction check",
            "Hello. I have [dietary restriction / allergy]. Could you please confirm whether breakfast or dinner can avoid [ingredient]? I understand this may not always be possible.",
        ),
    ]

    y = 520
    for title, text in templates:
        c.setFillColor(CARD)
        c.roundRect(MARGIN, y - 106, PAGE_W - (MARGIN * 2), 112, 8, fill=1, stroke=0)
        c.setStrokeColor(LINE)
        c.roundRect(MARGIN, y - 106, PAGE_W - (MARGIN * 2), 112, 8, fill=0, stroke=1)
        label(c, MARGIN + 18, y - 26, title)
        draw_wrapped(c, text, MARGIN + 18, y - 50, 77, 10, 14, MUTED)
        y -= 136

    footer(c, 4)


def page_four(c):
    page_bg(c)
    label(c, MARGIN, 708, "next step")
    c.setFillColor(INK)
    c.setFont(FONT_NAME, 31)
    c.drawString(MARGIN, 660, "Turn uncertainty")
    c.drawString(MARGIN, 624, "into a shortlist.")

    draw_wrapped(
        c,
        "The goal is not to find the most famous hotel. The goal is to find a stay where the practical details match the way you travel.",
        MARGIN,
        584,
        74,
        11,
        17,
        MUTED,
    )

    blocks = [
        ("Use BSJ stay profiles", "Compare researched notes by condition: tattoos, baths, luggage, food needs, families, pets, English support, and long stays."),
        ("Save the phrase cards", "When you need to ask staff in Japan, use BSJ phone cards for short show-this-card Japanese."),
        ("Ask for confirmation", "If a detail affects your booking decision, send a written question or use a confirmation support workflow."),
    ]
    y = 504
    for title, text in blocks:
        note_box(c, MARGIN, y, title, text, 88)
        y -= 112

    c.setFillColor(NAVY)
    c.roundRect(MARGIN, 96, PAGE_W - (MARGIN * 2), 78, 8, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#f5efe2"))
    c.setFont(FONT_NAME, 13)
    c.drawString(MARGIN + 20, 140, "BespokeStayJapan.com")
    c.setFont(FONT_NAME, 10)
    c.drawString(MARGIN + 20, 118, "Research notes for Japan stays with real travel constraints.")

    footer(c, 5)


def build_pdf(path):
    c = canvas.Canvas(str(path), pagesize=(PAGE_W, PAGE_H))
    cover(c)
    c.showPage()
    page_one(c)
    c.showPage()
    page_two(c)
    c.showPage()
    page_three(c)
    c.showPage()
    page_four(c)
    c.save()


def main():
    ensure_dirs()
    build_pdf(OUTPUT)
    PUBLIC_OUTPUT.write_bytes(OUTPUT.read_bytes())
    print(f"Wrote {OUTPUT}")
    print(f"Wrote {PUBLIC_OUTPUT}")


if __name__ == "__main__":
    main()
