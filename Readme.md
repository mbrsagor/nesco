# NESCO Project

> This project fetches customer information from the NESCO prepaid customer portal, parses the HTML response, and prints useful details such as balance, customer information, monthly usage, and recharge history.

## How It Works

1. The script reads the configured customer number from `config.py`.
2. `main.py` creates a `NescoClient` instance.
3. The client fetches the login/customer page and extracts the CSRF token.
4. It submits the customer number to the portal.
5. The returned HTML is parsed by service modules.
6. Data is printed to the terminal in a readable format.

## Setup

Install dependencies:

```bash
pip install -r requirements.txt
```

Then update the customer number in `config.py`:

```python
CUSTOMER_NUMBER = "Your Customer Number"
```

Run the project:

```bash
python main.py
```

## Notes

- This project depends on the HTML structure of the NESCO customer portal.
- If the website updates its page markup, the parsing logic may need to be adjusted.
- The project is mainly a scraper/parser built around BeautifulSoup and `requests`.
