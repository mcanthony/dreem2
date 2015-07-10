Ext.data.JsonP.dr_variablelayout({"tagname":"class","name":"dr.variablelayout","autodetected":{},"files":[{"filename":"variablelayout.js","href":"variablelayout.html#dr-variablelayout"}],"extends":"dr.constantlayout","members":[{"name":"attribute","tagname":"attribute","owner":"dr.constantlayout","id":"attribute-attribute","meta":{}},{"name":"reverse","tagname":"attribute","owner":"dr.variablelayout","id":"attribute-reverse","meta":{}},{"name":"updateparent","tagname":"attribute","owner":"dr.variablelayout","id":"attribute-updateparent","meta":{}},{"name":"value","tagname":"attribute","owner":"dr.constantlayout","id":"attribute-value","meta":{}},{"name":"doAfterUpdate","tagname":"method","owner":"dr.variablelayout","id":"method-doAfterUpdate","meta":{}},{"name":"doBeforeUpdate","tagname":"method","owner":"dr.variablelayout","id":"method-doBeforeUpdate","meta":{}},{"name":"skipSubview","tagname":"method","owner":"dr.variablelayout","id":"method-skipSubview","meta":{}},{"name":"startMonitoringSubview","tagname":"method","owner":"dr.variablelayout","id":"method-startMonitoringSubview","meta":{}},{"name":"stopMonitoringSubview","tagname":"method","owner":"dr.variablelayout","id":"method-stopMonitoringSubview","meta":{}},{"name":"update","tagname":"method","owner":"dr.constantlayout","id":"method-update","meta":{}},{"name":"updateParent","tagname":"method","owner":"dr.variablelayout","id":"method-updateParent","meta":{}},{"name":"updateSubview","tagname":"method","owner":"dr.variablelayout","id":"method-updateSubview","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-dr.variablelayout","short_doc":"This layout extends constantlayout adding the capability to control\nwhat value is set on each managed view. ...","component":false,"superclasses":["dr.layout","dr.constantlayout"],"subclasses":["dr.alignlayout","dr.spacedlayout","dr.wrappinglayout"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>dr.layout<div class='subclass '><a href='#!/api/dr.constantlayout' rel='dr.constantlayout' class='docClass'>dr.constantlayout</a><div class='subclass '><strong>dr.variablelayout</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/dr.alignlayout' rel='dr.alignlayout' class='docClass'>dr.alignlayout</a></div><div class='dependency'><a href='#!/api/dr.spacedlayout' rel='dr.spacedlayout' class='docClass'>dr.spacedlayout</a></div><div class='dependency'><a href='#!/api/dr.wrappinglayout' rel='dr.wrappinglayout' class='docClass'>dr.wrappinglayout</a></div><h4>Files</h4><div class='dependency'><a href='source/variablelayout.html#dr-variablelayout' target='_blank'>variablelayout.js</a></div></pre><div class='doc-contents'><p>This layout extends constantlayout adding the capability to control\nwhat value is set on each managed view. The to set on each vies is\ncontrolled by implementing the updateSubview method of this layout.</p>\n\n<p>The updateSubview method has four arguments: 'count', 'view',\n'attribute' and 'value'.\n    Count: The 1 based index of the view being updated, i.e. the\n        first view updated will have a count of 1, the second, a count\n        of 2, etc.\n    View: The view being updated. Your updateSubview method will\n        most likely modify this view in some way.\n    Attribute: The name of the attribute this layout is supposedly\n        updating. This will be set to the value of\n        the 'attribute' attribute of the variablelayout. You can use\n        this value if you wish or ignore it if you want to.\n    Value: The suggested value to set on the view. You can use it as\n        is or ignore it if you want. The value provided for the first\n        view will be the value of the 'value' attribute of the\n        variablelayout. Subsequent values will be the return value of\n        the updateSubview method for the previous view. This allows\n        you to feed values forward as each view is updated.</p>\n\n<p>This variable layout will position the first view at a y value of 10\nand each subsequent view will be positioned with a y value 1 pixel\nbelow the bottom of the previous view. In addition, all views with\nan even count will be positioned at an x of 5 and odd views at an\nx of 10. Also, updateparent has been set to true so the\nupdateParent method will be called with the attribute and last value\nreturned from updateSubview. In this case updateParent will resize\nthe parent view to a height that fits all the subviews plus an\nadditional 10 pixels.</p>\n\n<pre class='inline-example '><code>&lt;variablelayout attribute=\"y\" value=\"10\" updateparent=\"true\"&gt;\n    &lt;method name=\"updateSubview\" args=\"count, view, attribute, value\"&gt;\n        view.setAttribute(attribute, value);\n        view.setAttribute('x', count % 2 === 0 ? 5 : 10);\n        return value + view.height + 1;\n    &lt;/method&gt;\n    &lt;method name=\"updateParent\" args=\"attribute, value\"&gt;\n        this.parent.setAttribute('height', value + 10);\n    &lt;/method&gt;\n&lt;/variablelayout&gt;\n\n&lt;view width=\"50\" height=\"25\" bgcolor=\"lightpink\"&gt;&lt;/view&gt;\n&lt;view width=\"50\" height=\"25\" bgcolor=\"plum\"&gt;&lt;/view&gt;\n&lt;view width=\"50\" height=\"25\" bgcolor=\"lightblue\"&gt;&lt;/view&gt;\n</code></pre>\n\n<p>This variable layout works similar to the one above except it will\nskip any view that has an opacity less that 0.5. To accomplish this\nthe skipSubview method has been implemented. Also, the\nstartMonitoringSubview and stopMonitoringSubview methods have been\nimplemented so that if the opacity of a view changes the layout will\nbe updated.</p>\n\n<pre class='inline-example '><code>&lt;variablelayout attribute=\"y\" value=\"10\" updateparent=\"true\"&gt;\n    &lt;method name=\"updateSubview\" args=\"count, view, attribute, value\"&gt;\n        view.setAttribute(attribute, value);\n        view.setAttribute('x', count % 2 === 0 ? 5 : 10);\n        return value + view.height + 1;\n    &lt;/method&gt;\n    &lt;method name=\"updateParent\" args=\"attribute, value\"&gt;\n        this.parent.setAttribute('height', value + 10);\n    &lt;/method&gt;\n    &lt;method name=\"startMonitoringSubview\" args=\"view\"&gt;\n        this.super();\n        this.listenTo(view, 'opacity', this.update)\n    &lt;/method&gt;\n    &lt;method name=\"stopMonitoringSubview\" args=\"view\"&gt;\n        this.super();\n        this.stopListening(view, 'opacity', this.update)\n    &lt;/method&gt;\n    &lt;method name=\"skipSubview\" args=\"view\"&gt;\n        if (0.5 &gt;= view.opacity) return true;\n        return this.super();\n    &lt;/method&gt;\n&lt;/variablelayout&gt;\n\n&lt;view width=\"50\" height=\"25\" bgcolor=\"lightpink\"&gt;&lt;/view&gt;\n&lt;view width=\"50\" height=\"25\" bgcolor=\"plum\"&gt;&lt;/view&gt;\n&lt;view width=\"50\" height=\"25\" bgcolor=\"black\" opacity=\"0.25\"&gt;&lt;/view&gt;\n&lt;view width=\"50\" height=\"25\" bgcolor=\"lightblue\"&gt;&lt;/view&gt;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-attribute'>Attributes</h3><div class='subsection'><div id='attribute-attribute' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.constantlayout' rel='dr.constantlayout' class='defined-in docClass'>dr.constantlayout</a><br/><a href='source/constantlayout.html#dr-constantlayout-attribute-attribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.constantlayout-attribute-attribute' class='name expandable'>attribute</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the attribute to update on each subview. ...</div><div class='long'><p>The name of the attribute to update on each subview.</p>\n<p>Defaults to: <code>x</code></p></div></div></div><div id='attribute-reverse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.variablelayout'>dr.variablelayout</span><br/><a href='source/variablelayout.html#dr-variablelayout-attribute-reverse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.variablelayout-attribute-reverse' class='name expandable'>reverse</a> : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If true the layout will run through the views in the opposite order when\ncalling updateSubview. ...</div><div class='long'><p>If true the layout will run through the views in the opposite order when\ncalling updateSubview. For subclasses of variablelayout this will\ntypically result in views being layed out in the opposite direction,\nright to left instead of left to right, bottom to top instead of top to\nbottom, etc.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='attribute-updateparent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.variablelayout'>dr.variablelayout</span><br/><a href='source/variablelayout.html#dr-variablelayout-attribute-updateparent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.variablelayout-attribute-updateparent' class='name expandable'>updateparent</a> : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If true the updateParent method of the variablelayout will be called. ...</div><div class='long'><p>If true the updateParent method of the variablelayout will be called.\nThe updateParent method provides an opportunity for the layout to\nmodify the parent view in some way each time update completes. A typical\nimplementation is to resize the parent to fit the newly layed out child\nviews.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='attribute-value' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.constantlayout' rel='dr.constantlayout' class='defined-in docClass'>dr.constantlayout</a><br/><a href='source/constantlayout.html#dr-constantlayout-attribute-value' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.constantlayout-attribute-value' class='name expandable'>value</a> : *<span class=\"signature\"></span></div><div class='description'><div class='short'>The speed of an animated update of the managed views. ...</div><div class='long'><p>The speed of an animated update of the managed views. If 0 no animation\nwill be performed</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-doAfterUpdate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.variablelayout'>dr.variablelayout</span><br/><a href='source/variablelayout.html#dr-variablelayout-method-doAfterUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.variablelayout-method-doAfterUpdate' class='name expandable'>doAfterUpdate</a>( <span class='pre'>value</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by the update method after any processing is done but before the\noptional updateParent method is called. ...</div><div class='long'><p>Called by the update method after any processing is done but before the\noptional updateParent method is called. This method gives the variablelayout\na chance to do any special teardown after updateSubview has been called\nfor each managed view.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : *<div class='sub-desc'><p>The last value calculated by the updateSubview calls.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-doBeforeUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.variablelayout'>dr.variablelayout</span><br/><a href='source/variablelayout.html#dr-variablelayout-method-doBeforeUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.variablelayout-method-doBeforeUpdate' class='name expandable'>doBeforeUpdate</a>( <span class='pre'></span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by the update method before any processing is done. ...</div><div class='long'><p>Called by the update method before any processing is done. This method\ngives the variablelayout a chance to do any special setup before update is\nprocessed for each view. This is a good place to calculate any values\nthat will be needed during the calls to updateSubview.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-skipSubview' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.variablelayout'>dr.variablelayout</span><br/><a href='source/variablelayout.html#dr-variablelayout-method-skipSubview' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.variablelayout-method-skipSubview' class='name expandable'>skipSubview</a>( <span class='pre'>view</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Called for each subview in the layout to determine if the view should\nbe updated or not. ...</div><div class='long'><p>Called for each subview in the layout to determine if the view should\nbe updated or not. The default implementation returns true if the\nsubview is not visible since views that can't be seen don't typically\nneed to be positioned. You could implement your own skipSubview method\nto use other attributes of a view to determine if a view should be\nupdated or not. An important point is that skipped views are still\nmonitored by the layout. Therefore, if you use a different attribute to\ndetermine wether to skip a view or not you should probably also provide\ncustom implementations of startMonitoringSubview and stopMonitoringSubview\nso that when the attribute changes to/from a value that would result in\nthe view being skipped the layout will update.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : dr.view<div class='sub-desc'><p>The subview to check.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the subview should be skipped during\n  layout updates.</p>\n</div></li></ul></div></div></div><div id='method-startMonitoringSubview' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.variablelayout'>dr.variablelayout</span><br/><a href='source/variablelayout.html#dr-variablelayout-method-startMonitoringSubview' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.variablelayout-method-startMonitoringSubview' class='name expandable'>startMonitoringSubview</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Provides a default implementation that calls update when the\nvisibility of a subview changes. ...</div><div class='long'><p>Provides a default implementation that calls update when the\nvisibility of a subview changes. Monitoring the visible attribute of\na view is useful since most layouts will want to \"reflow\" as views\nbecome visible or hidden.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : dr.view<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stopMonitoringSubview' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.variablelayout'>dr.variablelayout</span><br/><a href='source/variablelayout.html#dr-variablelayout-method-stopMonitoringSubview' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.variablelayout-method-stopMonitoringSubview' class='name expandable'>stopMonitoringSubview</a>( <span class='pre'>view</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Provides a default implementation that calls update when the\nvisibility of a subview changes. ...</div><div class='long'><p>Provides a default implementation that calls update when the\nvisibility of a subview changes.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : dr.view<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-update' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.constantlayout' rel='dr.constantlayout' class='defined-in docClass'>dr.constantlayout</a><br/><a href='source/constantlayout.html#dr-constantlayout-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.constantlayout-method-update' class='name expandable'>update</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the attribute to the value on every subview managed by this layout. ...</div><div class='long'><p>Set the attribute to the value on every subview managed by this layout.</p>\n</div></div></div><div id='method-updateParent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.variablelayout'>dr.variablelayout</span><br/><a href='source/variablelayout.html#dr-variablelayout-method-updateParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.variablelayout-method-updateParent' class='name expandable'>updateParent</a>( <span class='pre'>attribute, value</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Called if the updateparent attribute is true. ...</div><div class='long'><p>Called if the updateparent attribute is true. Subclasses should\nimplement this if they want to modify the parent view.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attribute</span> : String<div class='sub-desc'><p>The name of the attribute to update.</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>The value to set on the parent.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateSubview' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.variablelayout'>dr.variablelayout</span><br/><a href='source/variablelayout.html#dr-variablelayout-method-updateSubview' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.variablelayout-method-updateSubview' class='name expandable'>updateSubview</a>( <span class='pre'>count, view, attribute, value</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Called for each subview in the layout. ...</div><div class='long'><p>Called for each subview in the layout.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>count</span> : Number<div class='sub-desc'><p>The number of subviews that have been layed out\n  including the current one. i.e. count will be 1 for the first\n  subview layed out.</p>\n</div></li><li><span class='pre'>view</span> : dr.view<div class='sub-desc'><p>The subview being layed out.</p>\n</div></li><li><span class='pre'>attribute</span> : String<div class='sub-desc'><p>The name of the attribute to update.</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>The value to set on the subview.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>The value to use for the next subview.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});