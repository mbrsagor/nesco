import re

from bs4 import BeautifulSoup


def create_soup(html):
    return BeautifulSoup(
        html,
        "html.parser",
    )


def clean_text(value):
    if not value:
        return ""

    value = value.replace("\xa0", " ")

    return " ".join(
        value.split()
    ).strip()


def to_number(value):
    if not value:
        return None

    value = clean_text(value)
    value = value.replace(",", "")

    match = re.search(
        r"-?\d+(?:\.\d+)?",
        value,
    )

    if not match:
        return None

    return float(match.group())


def find_input_value(soup, label_keyword):
    """
    Find an input value associated with a label.
    """

    for label in soup.find_all("label"):

        label_text = clean_text(
            label.get_text(
                " ",
                strip=True,
            )
        )

        if label_keyword not in label_text:
            continue

        # Search nearby input
        input_tag = label.find_next(
            "input"
        )

        if not input_tag:
            continue

        value = input_tag.get("value")

        if value:
            return clean_text(value)

    return None
