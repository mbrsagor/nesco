from parser import (
    create_soup,
    clean_text,
    to_number,
)


def get_monthly_usage(html):

    soup = create_soup(html)

    results = []

    for table in soup.find_all("table"):

        rows = table.find_all("tr")

        if not rows:
            continue

        headers = [
            clean_text(
                cell.get_text(
                    " ",
                    strip=True,
                )
            )
            for cell in rows[0].find_all(
                ["th", "td"]
            )
        ]

        header_text = " ".join(headers)

        if "ব্যবহৃত বিদ্যুৎ" not in header_text:
            continue

        for row in rows[1:]:

            cells = row.find_all(
                ["td", "th"]
            )

            values = [
                clean_text(
                    cell.get_text(
                        " ",
                        strip=True,
                    )
                )
                for cell in cells
            ]

            if len(values) < 5:
                continue

            results.append({
                "year": values[0],
                "month": values[1],
                "recharge": to_number(
                    values[2]
                ),
                "credit": to_number(
                    values[3]
                ),
                "usage_kwh": to_number(
                    values[4]
                ),
            })

    return results
