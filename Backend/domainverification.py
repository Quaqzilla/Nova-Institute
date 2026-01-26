from email_validator import validate_email, EmailNotValidError, caching_resolver

#Validate email address domain which users enter in the signup page

resolver = caching_resolver(timeout=10)

class Email_verification:
    def __init__(self, email_address):
        self.email_address = email_address

    def validate_domain(self):
        try:
            validate_email(self.email_address, check_deliverability=True, strict=True, dns_resolver=resolver)
            return True
        except EmailNotValidError as e:
            print(f"Invalid email: {e}")
            return False


