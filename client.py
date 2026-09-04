import requests
from bs4 import BeautifulSoup

from config import BASE_URL, HEADERS


class NescoClient:

    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update(HEADERS)

    def get_csrf_token(self):
        response = self.session.get(
            BASE_URL,
            timeout=30,
        )

        response.raise_for_status()

        soup = BeautifulSoup(
            response.text,
            "html.parser",
        )

        csrf = soup.find(
            "meta",
            attrs={"name": "csrf-token"},
        )

        if not csrf:
            raise RuntimeError(
                "NESCO CSRF token not found."
            )

        token = csrf.get("content")

        if not token:
            raise RuntimeError(
                "NESCO CSRF token is empty."
            )

        return token

    def get_customer_data(self, customer_number):
        csrf_token = self.get_csrf_token()

        payload = {
            "_token": csrf_token,
            "cust_no": customer_number,
            "submit": "রিচার্জ হিস্ট্রি",
        }

        response = self.session.post(
            BASE_URL,
            data=payload,
            headers={
                "Referer": BASE_URL,
                "Origin": "https://customer.nesco.gov.bd",
            },
            timeout=30,
        )

        response.raise_for_status()

        return response.text
