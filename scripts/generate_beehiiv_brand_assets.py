from pathlib import Path
import math

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "brand"

NAVY = "#102033"
NAVY_2 = "#17283b"
CREAM = "#f5efe2"
MUTED = "#c8c0ae"
BORDER = "#d9d1c2"
CHARCOAL = "#272a2d"
BG = "#f7f3ea"
BG_SOFT = "#eee7dc"
ACCENT = "#8e7457"

GEORGIA = "/System/Library/Fonts/Supplemental/Georgia.ttf"
GEORGIA_BOLD = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
AVENIR = "/System/Library/Fonts/Avenir.ttc"
AVENIR_NEXT = "/System/Library/Fonts/Avenir Next.ttc"


def font(path: str, size: int, index: int = 0) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size, index=index)


def text_size(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont) -> tuple[int, int]:
    bbox = draw.textbbox((0, 0), text, font=fnt)
    return bbox[2] - bbox[0], bbox[3] - bbox[1]


def center_text(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    fnt: ImageFont.FreeTypeFont,
    fill: str,
    spacing: int = 0,
) -> None:
    x, y = xy
    if spacing == 0:
        w, h = text_size(draw, text, fnt)
        draw.text((x - w / 2, y - h / 2), text, font=fnt, fill=fill)
        return

    widths = [text_size(draw, ch, fnt)[0] for ch in text]
    total = sum(widths) + spacing * (len(text) - 1)
    cursor = x - total / 2
    h = text_size(draw, text, fnt)[1]
    for ch, w in zip(text, widths):
        draw.text((cursor, y - h / 2), ch, font=fnt, fill=fill)
        cursor += w + spacing


def draw_subtle_grid(draw: ImageDraw.ImageDraw, width: int, height: int, color: str) -> None:
    for x in range(-height, width + height, 90):
        draw.line((x, 0, x + height, height), fill=color, width=1)
    for y in range(80, height, 90):
        draw.line((0, y, width, y), fill=color, width=1)


def draw_window_mark(draw: ImageDraw.ImageDraw, cx: int, cy: int, scale: float, color: str) -> None:
    roof_w = int(160 * scale)
    roof_h = int(56 * scale)
    line_w = max(4, int(10 * scale))
    draw.line((cx - roof_w // 2, cy, cx, cy - roof_h, cx + roof_w // 2, cy), fill=color, width=line_w, joint="curve")
    sq = int(15 * scale)
    gap = int(8 * scale)
    top = cy + int(18 * scale)
    left = cx - sq - gap // 2
    for row in range(2):
        for col in range(2):
            x0 = left + col * (sq + gap)
            y0 = top + row * (sq + gap)
            draw.rectangle((x0, y0, x0 + sq, y0 + sq), fill=color)


def generate_logo() -> Path:
    size = 800
    img = Image.new("RGB", (size, size), NAVY)
    draw = ImageDraw.Draw(img)

    draw_subtle_grid(draw, size, size, "#17283a")
    draw.rectangle((36, 36, size - 36, size - 36), outline="#2a3948", width=2)
    draw.rectangle((58, 58, size - 58, size - 58), outline="#223140", width=1)

    draw_window_mark(draw, 400, 178, 1.15, ACCENT)

    title_font = font(GEORGIA_BOLD, 206)
    center_text(draw, (400, 378), "BSJ", title_font, CREAM)

    label_font = font(AVENIR_NEXT, 31)
    center_text(draw, (400, 590), "BESPOKE STAY JAPAN", label_font, CREAM, spacing=9)

    small_font = font(AVENIR, 21)
    center_text(draw, (400, 650), "PRACTICAL JAPAN STAY NOTES", small_font, MUTED, spacing=4)

    draw.line((104, 592, 134, 592), fill=ACCENT, width=4)
    draw.line((666, 592, 696, 592), fill=ACCENT, width=4)

    out = OUT_DIR / "bsj-beehiiv-logo.png"
    img.save(out, optimize=True)
    return out


def wrapped_text(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    lines: list[str] = []
    current = ""
    for word in text.split():
        candidate = f"{current} {word}".strip()
        if text_size(draw, candidate, fnt)[0] <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_label(draw: ImageDraw.ImageDraw, x: int, y: int, text: str) -> None:
    fnt = font(AVENIR_NEXT, 23)
    pad_x = 18
    pad_y = 11
    w, h = text_size(draw, text, fnt)
    draw.rounded_rectangle(
        (x, y, x + w + pad_x * 2, y + h + pad_y * 2),
        radius=4,
        fill=BG,
        outline=BORDER,
        width=1,
    )
    draw.text((x + pad_x, y + pad_y - 1), text, font=fnt, fill=CHARCOAL)


def generate_thumbnail() -> Path:
    width, height = 1200, 630
    img = Image.new("RGB", (width, height), BG)
    draw = ImageDraw.Draw(img)

    draw.rectangle((0, 0, width, height), fill=BG)
    draw.rectangle((0, 0, width, 630), fill=BG)
    draw_subtle_grid(draw, width, height, "#ebe3d7")
    draw.rectangle((0, 0, 390, height), fill=NAVY)
    draw.rectangle((390, 0, 393, height), fill=ACCENT)
    draw.rectangle((40, 40, 350, height - 40), outline="#2a3948", width=1)

    draw_window_mark(draw, 195, 126, 0.55, ACCENT)
    center_text(draw, (195, 250), "BSJ", font(GEORGIA_BOLD, 112), CREAM)
    center_text(draw, (195, 365), "BESPOKE", font(AVENIR_NEXT, 21), CREAM, spacing=7)
    center_text(draw, (195, 405), "STAY JAPAN", font(AVENIR_NEXT, 21), CREAM, spacing=6)
    center_text(draw, (195, 506), "Researched stay notes", font(AVENIR, 22), MUTED)

    eyebrow = font(AVENIR_NEXT, 24)
    draw.text((460, 86), "BESPOKE STAY JAPAN", font=eyebrow, fill=ACCENT)

    headline = "Japan stays for real travel needs"
    headline_font = font(GEORGIA_BOLD, 67)
    y = 132
    for line in wrapped_text(draw, headline, headline_font, 650):
        draw.text((456, y), line, font=headline_font, fill=CHARCOAL)
        y += 76

    body = (
        "Tattoo notes, food needs, luggage support, private baths, family stays, "
        "and long-stay comfort. Researched from Japanese sources and hotel policies."
    )
    body_font = font(AVENIR, 28)
    y += 16
    for line in wrapped_text(draw, body, body_font, 655):
        draw.text((460, y), line, font=body_font, fill="#666159")
        y += 42

    labels = [
        ("Tattoo notes", 462, 458),
        ("Food needs", 650, 458),
        ("Luggage", 810, 458),
        ("Private bath", 462, 522),
        ("Long stay", 666, 522),
        ("Family", 832, 522),
    ]
    for text, x, ly in labels:
        draw_label(draw, x, ly, text)

    draw.arc((1034, 74, 1168, 208), start=205, end=520, fill=BG_SOFT, width=16)
    draw.line((1101, 68, 1101, 214), fill=BG_SOFT, width=16)
    for angle in (35, 90, 145, 215, 270, 325):
        rad = math.radians(angle)
        cx = 1101 + int(math.cos(rad) * 78)
        cy = 141 + int(math.sin(rad) * 78)
        draw.ellipse((cx - 5, cy - 5, cx + 5, cy + 5), fill=ACCENT)

    out = OUT_DIR / "bsj-beehiiv-thumbnail.png"
    img.save(out, optimize=True)
    return out


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    paths = [generate_logo(), generate_thumbnail()]
    for path in paths:
        print(path.relative_to(ROOT))


if __name__ == "__main__":
    main()
