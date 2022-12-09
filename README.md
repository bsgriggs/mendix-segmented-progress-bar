## Segmented Progress Bar
Progress bar with multiple sections to show completion or comparison of values

![overview](https://github.com/bsgriggs/mendix-segmented-progress-bar/blob/media/overview.png)

## Features
- title for the bar
- static or dynamic list of segments 
- summary below the bar - can be disabled
- percentage sum on the right - can be disabled
- max value can either be the sum of the segments or a specific value
- can show the summary value as a text template - add approprate labels and decimal precision 
- values are shown when hovering on a segment

## Usage
1. General Settings - Decide whether you need a static list of segments or dynamic from a data source  
2. Decide whether you need a max value or not.  
  2a. no max value - the sum of the segments will be treated at 100%  
  2b. max value - the value entered will be treated as 100% (values over 100% are supported)  
![general](https://github.com/bsgriggs/mendix-segmented-progress-bar/blob/media/general.png)  
3. Segment setup  
  ### Static Segments - Pre-defined list of segments  
  ![staticSettings](https://github.com/bsgriggs/mendix-segmented-progress-bar/blob/media/staticSettings.png)  
  *Each segment has the following options*  
  ![manualSummaryTextType](https://github.com/bsgriggs/mendix-segmented-progress-bar/blob/media/manualSummaryTextType.png)  
  **Summary Caption** - The label next to the value in the summary  
  **Summary Value** - The text template shown in the summary for this segment. Can be used to add a label or set the precision of the summary values.  
  **Value** - The number (decimal) used in calulations for this segment  
  **Color** - CSS color value. (i.e. blue or #23d82b)  
  **On Click** - Action for when the user clicks on a segment inside the progress bar  

  ### Dynamic Segments - List segments from a data source  
  You will need an entity with the following attributes (it does not *have* to be persistable)  
  ![domain](https://github.com/bsgriggs/mendix-segmented-progress-bar/blob/media/domain.png)  
  ![dynamicSegmentItem](https://github.com/bsgriggs/mendix-segmented-progress-bar/blob/media/dynamicSegmentItem.png)  
  **Dynamic Segment List** - the datasource for the segements
  **Summary Caption** - The label next to the value in the summary  
  **Summary Value** - The text template shown in the summary for this segment. Can be used to add a label or set the precision of the summary values.  
  **Value** - The number (decimal) used in calulations for this segment  
  **Color** - CSS color value. (i.e. blue or #23d82b)  
  **On Click** - Action for when the user clicks on a segment inside the progress bar  

4. Customization  
![Customization](https://github.com/bsgriggs/mendix-segmented-progress-bar/blob/media/customization.png)  
**Percent Sum** - The number to the right of the progress bar  
**Show Summary** - The text / legend below the progress bar  
**Show Summary Total** - The sum of values is shown on the right of the summary section  
**Summary Text Type** - Should the summary show the literal value or the text template. Manual mode adds the 'Summary Value' setting in the segments. Can be used to add a label or set the precision of the summary values.  

## Notes
- You can adjust the height of the progress bar by overriding the css class: .spb .spb-progress-bar-row .spb-progress-bar

## Demo project
https://widgettesting105-sandbox.mxapps.io/p/segmented-progress-bar

## Issues, suggestions and feature requests
https://github.com/bsgriggs/mendix-segmented-progress-bar/issues

This widget is open source. Feel free to clone the GitHub repository, make whatever changes you need, and submit a pull request! 
**Requires Node v14 and NPM v6 - if you already have a different version of Node / NPM, then download [NVM](https://github.com/nvm-sh/nvm) to switch between versions**

## Development and contribution

Benjamin Griggs
