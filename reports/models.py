from django.db import models
from django.contrib.auth.models import User

class Report(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    report_type = models.CharField(max_length=100)
    generated_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.report_type