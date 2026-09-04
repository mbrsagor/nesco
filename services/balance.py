from parser import (
    create_soup,
    find_input_value,
    to_number,
)


def get_balance(html):

    soup = create_soup(html)

    value = find_input_value(
        soup,
        "অবশিষ্ট ব্যালেন্স",
    )

    return to_number(value)
