from parser import (
    create_soup,
    clean_text,
)


def get_recharge_history(html):

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

        if "রিচার্জ" not in header_text:
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

            if values:
                results.append(values)

    return results
