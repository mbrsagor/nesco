from config import CUSTOMER_NUMBER

from client import NescoClient

from services.balance import get_balance
from services.customer import get_customer_info
from services.monthly_usage import get_monthly_usage
from services.recharge_history import get_recharge_history


def main():

    client = NescoClient()

    html = client.get_customer_data(
        CUSTOMER_NUMBER
    )

    # Balance
    balance = get_balance(html)

    # Customer information
    customer = get_customer_info(html)

    # Monthly usage
    monthly_usage = get_monthly_usage(html)

    # Recharge history
    recharge_history = get_recharge_history(html)

    print()
    print("=" * 60)
    print("NESCO PREPAID")
    print("=" * 60)

    print(
        "Customer:",
        CUSTOMER_NUMBER,
    )

    print(
        "Balance:",
        balance,
    )

    print()
    print("CUSTOMER INFORMATION")
    print("-" * 60)

    for key, value in customer.items():
        print(
            f"{key}: {value}"
        )

    print()
    print("MONTHLY USAGE")
    print("-" * 60)

    for item in monthly_usage:
        print(item)

    print()
    print("RECHARGE HISTORY")
    print("-" * 60)

    for item in recharge_history:
        print(item)


if __name__ == "__main__":
    main()
