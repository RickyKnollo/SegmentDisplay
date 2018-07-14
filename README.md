## SegmentDisplay
This 7/14/16 SegmentDisplay is a Enhancements for [NodeRed-Dashboard](https://github.com/node-red/node-red-dashboard).  
The library was developed by [3Quarks](http://www.3quarks.com/en/SegmentDisplay).  
Tested in Node-Red-Dashboard V 2.8.3 and V 2.9.4.  
Thanks for the great work.

## Install compiled Dist
1.Download dist/dist_xxx.zip  
2.Unzip and overwriting your installed node-red-dashboard directory  
3.Restart Node-Red

## For a manuell compiling with Gulp
#### Change File : package.json
<pre>
"node-red": {
        "nodes": {
            ...
	"ui_segmentdisplay":"nodes/ui_segmentdisplay.js"
}
</pre>

#### Change File : src/index.html
<pre>
...
&lt;!--Segment Display --&gt;
<script src="components/ui-segmentdisplay/ui-segmentdisplay.js"></script>
<script src="vendor/segmentdisplay/segment-display.js"></script>
...
&lt;!-- endbuild --&gt;
</pre>

#### New Files
|File|Info
|---|---
|node_module/segmentdisplay/segment-display.js|SegmentDisplay Object from 3Quarks
|nodes/ui_segmentdisplay.html|Node-Red-Dashboard Node
|nodes/ui_segmentdisplay.js
|nodes/icons/ui_segmentdisplay.png
|src/components/ui-segmentdisplay/ui-segmentdisplay.html|Template Canvas
|src/components/ui-segmentdisplay/ui-segmentdisplay.js|Directive uiSegmentdisplay
|src/components/ui-component/templates/segmentdisplay.html|md-card Template with Directive
|src/components/ui-component/templates/segmentdisplay.css


![IMG1](Image01.png)
