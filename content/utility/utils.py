# type: ignore

import asyncio
import io
import os
import warnings
from io import BytesIO, StringIO

import IPython
import js
import pandas as pd
from js import fetch

warnings.filterwarnings("ignore")

import pandas as pd
from js import fetch

jj = os.path.join


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

async def get_indexdb_store():
    """kudos: https://github.com/jupyterlite/jupyterlite/discussions/91#discussioncomment-1137213"""
    queue = asyncio.Queue(1)
    store_request = js.self.indexedDB.open("JupyterLite Storage")
    store_request.onsuccess = store_request.onerror = queue.put_nowait
    await queue.get()
    if store_request.result is None:
        return None
    transaction = store_request.result.transaction("files", "readonly")
    store = transaction.objectStore("files")
    return store

async def get_indexdb_list():
    queue = asyncio.Queue(1)
    store = await get_indexdb_store()
    keys = store.getAllKeys()
    keys.onsuccess = keys.onerror = queue.put_nowait
    await queue.get()
    return keys.result.to_py()

async def read_indexdb_file(path):
    queue = asyncio.Queue(1)
    store = await get_indexdb_store()
    request = store.get(path, "key")
    request.onsuccess = request.onerror = queue.put_nowait
    await queue.get()
    return request.result.to_py())["content"] if request.result else None

async def pandas_read_csv(filename, **kwargs):
    """"""
    return pd.read_csv(io.StringIO((await read_indexdb_file(filename)), **kwargs)

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


# Via: https://github.com/jupyterlite/jupyterlite/issues/119#issuecomment-854495013
# URL = "https://support.staffbase.com/hc/en-us/article_attachments/360009197031/username.csv"
# df = await read_csv_url(URL, "\t")
# df
# url = "https://raw.githubusercontent.com/humlab/penelope/main/tests/test_data/SSI_document_index.csv"

# url = "https://raw.githubusercontent.com/pyodide/pyodide/main/docs/_static/img/pyodide-logo-readme.png"
# filename = 'apa.png'
# await fetch_binary(url, filename)


# async def get_store(path):
#     queue = asyncio.Queue(1)
#     open_request = js.self.indexedDB.open("JupyterLite Storage")
#     open_request.onsuccess = open_request.onerror = queue.put_nowait
#     await queue.get()
#     if open_request.result is None:
#         return None
#     transaction = open_request.result.transaction("files", "readonly")
#     store = transaction.objectStore("files")
#     return store

# async def read_file(filename):
#     queue = asyncio.Queue(1)
#     read_request = (await get_store()).get(filename, "key")
#     read_request.onsuccess = read_request.onerror = queue.put_nowait
#     await queue.get()
#     return read_request.result.to_py() if read_request.result else None
