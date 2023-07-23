import os
import requests

def lambda_handler(event,context):
    print(event)
    try:
        
        statusCode=200
        body="success" 
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