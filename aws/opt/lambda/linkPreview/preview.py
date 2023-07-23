import os
import requests

def lambda_handler(event,context):
    print(event)
    try:
        url = event['queryStringParameters']['url']
        resp = requests.get(f"http://api.linkpreview.net/?key={os.environ['linkPreviewApiKey']}&q={url}")
        statusCode=resp.status_code
        body=resp.text
    except Exception as e:
        print(e)
        statusCode=500
        body="failure" 
    return {
            'statusCode': statusCode,
            'body': body,
            'headers':{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': True
            }
        }