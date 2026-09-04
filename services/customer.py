from parser import (
    create_soup,
    find_input_value,
    to_number,
)


def get_customer_info(html):

    soup = create_soup(html)

    approved_load = find_input_value(
        soup,
        "অনুমোদিত লোড",
    )

    minimum_recharge = find_input_value(
        soup,
        "মিনিমাম রিচার্জ",
    )

    return {
        "customer_name": find_input_value(
            soup,
            "গ্রাহকের নাম",
        ),

        "customer_number": find_input_value(
            soup,
            "কনজুমার নম্বর",
        ),

        "meter_number": find_input_value(
            soup,
            "মিটার নম্বর",
        ),

        "meter_type": find_input_value(
            soup,
            "মিটারের ধরন",
        ),

        "meter_status": find_input_value(
            soup,
            "মিটার স্ট্যাটাস",
        ),

        "tariff": find_input_value(
            soup,
            "অনুমোদিত ট্যারিফ",
        ),

        "approved_load_kw": to_number(
            approved_load
        ),

        "minimum_recharge": to_number(
            minimum_recharge
        ),
    }
