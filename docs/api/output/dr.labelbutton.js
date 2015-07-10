Ext.data.JsonP.dr_labelbutton({"tagname":"class","name":"dr.labelbutton","autodetected":{},"files":[{"filename":"labelbutton.js","href":"labelbutton.html#dr-labelbutton"}],"extends":"dr.buttonbase","members":[{"name":"defaultcolor","tagname":"attribute","owner":"dr.buttonbase","id":"attribute-defaultcolor","meta":{}},{"name":"selectcolor","tagname":"attribute","owner":"dr.buttonbase","id":"attribute-selectcolor","meta":{}},{"name":"selected","tagname":"attribute","owner":"dr.buttonbase","id":"attribute-selected","meta":{}},{"name":"text","tagname":"attribute","owner":"dr.buttonbase","id":"attribute-text","meta":{}},{"name":"onselected","tagname":"event","owner":"dr.buttonbase","id":"event-onselected","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-dr.labelbutton","short_doc":"Button class consisting of text centered in a view. ...","component":false,"superclasses":["dr.view","dr.buttonbase"],"subclasses":["dr.labeltoggle"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>dr.view<div class='subclass '><a href='#!/api/dr.buttonbase' rel='dr.buttonbase' class='docClass'>dr.buttonbase</a><div class='subclass '><strong>dr.labelbutton</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/dr.labeltoggle' rel='dr.labeltoggle' class='docClass'>dr.labeltoggle</a></div><h4>Files</h4><div class='dependency'><a href='source/labelbutton.html#dr-labelbutton' target='_blank'>labelbutton.js</a></div></pre><div class='doc-contents'><p>Button class consisting of text centered in a view. The onclick event\nis generated when the button is clicked. The visual state of the\nbutton changes during onmousedown/onmouseup.</p>\n\n<pre class='inline-example '><code>&lt;spacedlayout axis=\"y\"&gt;&lt;/spacedlayout&gt;\n\n&lt;labelbutton text=\"click me\"&gt;\n  &lt;handler event=\"onactivated\"&gt;\n    hello.setAttribute('text', 'Hello Universe!');\n  &lt;/handler&gt;\n&lt;/labelbutton&gt;\n\n&lt;text id=\"hello\"&gt;&lt;/text&gt;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-attribute'>Attributes</h3><div class='subsection'><div id='attribute-defaultcolor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.buttonbase' rel='dr.buttonbase' class='defined-in docClass'>dr.buttonbase</a><br/><a href='source/buttonbase.html#dr-buttonbase-attribute-defaultcolor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.buttonbase-attribute-defaultcolor' class='name expandable'>defaultcolor</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The default color of the visual button element when not selected. ...</div><div class='long'><p>The default color of the visual button element when not selected.</p>\n<p>Defaults to: <code>&quot;#808080&quot;</code></p></div></div></div><div id='attribute-selectcolor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.buttonbase' rel='dr.buttonbase' class='defined-in docClass'>dr.buttonbase</a><br/><a href='source/buttonbase.html#dr-buttonbase-attribute-selectcolor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.buttonbase-attribute-selectcolor' class='name expandable'>selectcolor</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The selected color of the visual button element when selected. ...</div><div class='long'><p>The selected color of the visual button element when selected.</p>\n<p>Defaults to: <code>&quot;#a0a0a0&quot;</code></p></div></div></div><div id='attribute-selected' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.buttonbase' rel='dr.buttonbase' class='defined-in docClass'>dr.buttonbase</a><br/><a href='source/buttonbase.html#dr-buttonbase-attribute-selected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.buttonbase-attribute-selected' class='name expandable'>selected</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>The current state of the button. ...</div><div class='long'><p>The current state of the button.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='attribute-text' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.buttonbase' rel='dr.buttonbase' class='defined-in docClass'>dr.buttonbase</a><br/><a href='source/buttonbase.html#dr-buttonbase-attribute-text' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.buttonbase-attribute-text' class='name expandable'>text</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Button text. ...</div><div class='long'><p>Button text.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-onselected' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.buttonbase' rel='dr.buttonbase' class='defined-in docClass'>dr.buttonbase</a><br/><a href='source/buttonbase.html#dr-buttonbase-event-onselected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.buttonbase-event-onselected' class='name expandable'>onselected</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fired when the state of the button changes. ...</div><div class='long'><p>Fired when the state of the button changes.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/dr.buttonbase\" rel=\"dr.buttonbase\" class=\"docClass\">dr.buttonbase</a><div class='sub-desc'><p>The <a href=\"#!/api/dr.buttonbase\" rel=\"dr.buttonbase\" class=\"docClass\">dr.buttonbase</a> that fired the event</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});