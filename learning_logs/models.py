from django.db import models

# Create your models here.
from django.db import models

class Topic(models.Model):
    ''' A topic the user is learning about. '''
    text = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        ''' Return a string representation of the model. '''
        return self.text[:50]
  
class Entry(models.Model):
    ''' Something specific learned about a topic. '''
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'entries'
    
    def __str__(self):
        str_entry = ""
        if len(self.text) > 50:
            str_entry = f"{self.text[:50]}..."
        else:
            str_entry = self.text

        return str_entry