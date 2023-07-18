from django.conf import settings
from django.db import models
class Bnfrh(models.Model):
    'Generated Model'
    xxer = models.BigIntegerField()
    vcdb = models.BigIntegerField()
    def test_method(self):
        import requests
        response = requests.get("https://hello.com")
        data = response.json()
        return data
