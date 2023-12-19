#! /bin/python3

import os
import json
import sys
import translate

print('Content-Type: text/json')
print('Cache-Control: no-cache, no-store')

content_length = int(os.environ.get('CONTENT_LENGTH', 0))
post_data = sys.stdin.buffer.read(content_length).decode('utf-8')

try:
    json_object = json.loads(post_data)
except json.JSONDecodeError as e:
    print(f"Error decoding JSON: {e}")

text_content_list = json_object['textContentArray']
languageCode = json_object['languageCode']

#TRANSLATE
translated_lines = translate.translatem(text_content_list, languageCode)

json_string = json.dumps(translated_lines)
byte_length = len(json_string.encode('utf-8'))
print('Content-Length: ' + str(byte_length) + '\n')
print(json_string)

# query_string = os.environ.get('QUERY_STRING')


