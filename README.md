# OneCopy

Chrome extension to save text to clipboard with JIRA Markdown link format.

This is my first Chrome extension project to understand APIs.

## Installation

You need to install this extension manually since it is not published on Chrome Web Store.

1. Clone or download this directory.
1. Open [chrome://extensions](chrome://extensions).
1. Enable Developer mode by toggling the top-right switch.
1. Click on the "Load unpackaged" button.
1. Choose the "OneCopy" directory you cloned or downloaded.

## Usage

* Save link with tab title to clipboard
  * Directions:
    1. Right click on anywhere on the tab you want to copy.
    1. Choose "OneCopy tab info".
  * Expected format:
    ```text
    [<Tab title>|<Tab URL address>]
    ```
  * Example:
    ```text
    [Google Chrome - Wikipedia|https://en.wikipedia.org/wiki/Google_Chrome]
    ```
* Save link with tab title and selected text to clipboard
  * Directions:
    1. Select text you want to copy.
    1. Right click on the selected text.
    1. Choose "OneCopy text".
  * Expected format:
    ```text
    * [<Tab title>|<Tab address>]
    ** <Selected text>
    ```
  * Example:
    ```text
    * [Google Chrome - Wikipedia|https://en.wikipedia.org/wiki/Google_Chrome#Extensions]
    ** Google Chrome Extensions are browser extensions that modify Google Chrome.
    ```
