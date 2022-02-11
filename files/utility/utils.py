# type: ignore

import os
from io import BytesIO, StringIO

import pandas as pd
from js import fetch

jj = os.path.join

url = "https://raw.githubusercontent.com/humlab/penelope/main/tests/test_data/SSI_document_index.csv"


async def fetch_text(url, path):
    res = await fetch(url)
    text = await res.text()
    with open(path, "w") as fp:
        fp.write(text)


async def fetch_dataframe(url, **kwargs):
    res = await fetch(url)
    csv_str = await res.text()
    df = pd.read_csv(StringIO(csv_str), **kwargs)
    return df


async def fetch_binary(url, path):
    response = await fetch(url)
    js_buffer = await response.arrayBuffer()
    bytes_data = BytesIO(js_buffer.to_py()).read()
    with open(path, "wb") as fp:
        fp.write(bytes_data)


# url = "https://raw.githubusercontent.com/pyodide/pyodide/main/docs/_static/img/pyodide-logo-readme.png"
# filename = 'apa.png'
# await fetch_binary(url, filename)


async def download_model(base_url, folder):

    os.makedirs(folder, exist_ok=True)

    for filename in [
        "dictionary.zip",
        "documents.zip",
        "document_topic_weights.zip",
        "topic_token_overview.zip",
        "topic_token_weights.zip",
    ]:
        await fetch_binary(f"{base_url}/{filename}", jj(folder, filename))

    await fetch_text(f"{base_url}/model_options.json", jj(folder, "model_options.json"))
