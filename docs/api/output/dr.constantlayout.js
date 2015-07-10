Ext.data.JsonP.dr_constantlayout({"tagname":"class","name":"dr.constantlayout","autodetected":{},"files":[{"filename":"constantlayout.js","href":"constantlayout.html#dr-constantlayout"}],"extends":"dr.layout","members":[{"name":"attribute","tagname":"attribute","owner":"dr.constantlayout","id":"attribute-attribute","meta":{}},{"name":"value","tagname":"attribute","owner":"dr.constantlayout","id":"attribute-value","meta":{}},{"name":"update","tagname":"method","owner":"dr.constantlayout","id":"method-update","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-dr.constantlayout","short_doc":"A layout that sets the target attribute name to the target value for\neach sibling view of the layout. ...","component":false,"superclasses":["dr.layout"],"subclasses":["dr.variablelayout"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>dr.layout<div class='subclass '><strong>dr.constantlayout</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/dr.variablelayout' rel='dr.variablelayout' class='docClass'>dr.variablelayout</a></div><h4>Files</h4><div class='dependency'><a href='source/constantlayout.html#dr-constantlayout' target='_blank'>constantlayout.js</a></div></pre><div class='doc-contents'><p>A layout that sets the target attribute name to the target value for\neach sibling view of the layout.</p>\n\n<p>This layout is useful if you want to ensure that an attribute value is\nshared in common by most or all children of a view. It also makes\nupdating that value easy since you can change the value on the\nconstant layout and it will be applied to all the managed sibling views.</p>\n\n<p>This constant layout will set the y attribute to 10 for every sibling\nview. Furthermore, since it's a layout, any new sibling view added\nwill also have its y attribute set to 10. Also, notice that the sibling\nview with the black bgcolor has ignorelayout set to true. This means\nthat view will be ignored by the layout and will thus not have its\ny attribute set to 10. You can change ignorelayout at runtime and the\nview will be added to, or removed from the layout. If you do remove a\nview at runtime from the layout the y attribute for that view will not\nbe changed, but subsequent changes to the layout will no longer effect\nthe view.</p>\n\n<pre class='inline-example '><code>&lt;constantlayout attribute=\"y\" value=\"10\"&gt;&lt;/constantlayout&gt;\n\n&lt;view width=\"100\" height=\"25\" bgcolor=\"lightpink\"&gt;&lt;/view&gt;\n&lt;view width=\"100\" height=\"25\" bgcolor=\"plum\"&gt;&lt;/view&gt;\n&lt;view ignorelayout=\"true\" width=\"100\" height=\"25\" bgcolor=\"black\"&gt;&lt;/view&gt;\n&lt;view width=\"100\" height=\"25\" bgcolor=\"lightblue\"&gt;&lt;/view&gt;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-attribute'>Attributes</h3><div class='subsection'><div id='attribute-attribute' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.constantlayout'>dr.constantlayout</span><br/><a href='source/constantlayout.html#dr-constantlayout-attribute-attribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.constantlayout-attribute-attribute' class='name expandable'>attribute</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the attribute to update on each subview. ...</div><div class='long'><p>The name of the attribute to update on each subview.</p>\n<p>Defaults to: <code>x</code></p></div></div></div><div id='attribute-value' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.constantlayout'>dr.constantlayout</span><br/><a href='source/constantlayout.html#dr-constantlayout-attribute-value' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.constantlayout-attribute-value' class='name expandable'>value</a> : *<span class=\"signature\"></span></div><div class='description'><div class='short'>The speed of an animated update of the managed views. ...</div><div class='long'><p>The speed of an animated update of the managed views. If 0 no animation\nwill be performed</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-update' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.constantlayout'>dr.constantlayout</span><br/><a href='source/constantlayout.html#dr-constantlayout-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.constantlayout-method-update' class='name expandable'>update</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the attribute to the value on every subview managed by this layout. ...</div><div class='long'><p>Set the attribute to the value on every subview managed by this layout.</p>\n</div></div></div></div></div></div></div>","meta":{}});