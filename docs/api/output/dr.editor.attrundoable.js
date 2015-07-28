Ext.data.JsonP.dr_editor_attrundoable({"tagname":"class","name":"dr.editor.attrundoable","autodetected":{},"files":[{"filename":"attrundoable.js","href":"attrundoable.html#dr-editor-attrundoable"}],"extends":"dr.editor.undoable","members":[{"name":"attribute","tagname":"attribute","owner":"dr.editor.attrundoable","id":"attribute-attribute","meta":{}},{"name":"done","tagname":"attribute","owner":"dr.editor.undoable","id":"attribute-done","meta":{"readonly":true}},{"name":"newvalue","tagname":"attribute","owner":"dr.editor.attrundoable","id":"attribute-newvalue","meta":{}},{"name":"oldvalue","tagname":"attribute","owner":"dr.editor.attrundoable","id":"attribute-oldvalue","meta":{}},{"name":"redodescription","tagname":"attribute","owner":"dr.editor.undoable","id":"attribute-redodescription","meta":{}},{"name":"target","tagname":"attribute","owner":"dr.editor.attrundoable","id":"attribute-target","meta":{}},{"name":"undodescription","tagname":"attribute","owner":"dr.editor.undoable","id":"attribute-undodescription","meta":{}},{"name":"__getDescription","tagname":"method","owner":"dr.editor.attrundoable","id":"method-__getDescription","meta":{"private":true}},{"name":"getRedoDescription","tagname":"method","owner":"dr.editor.attrundoable","id":"method-getRedoDescription","meta":{}},{"name":"getUndoDescription","tagname":"method","owner":"dr.editor.attrundoable","id":"method-getUndoDescription","meta":{}},{"name":"redo","tagname":"method","owner":"dr.editor.attrundoable","id":"method-redo","meta":{}},{"name":"setAttribute","tagname":"method","owner":"dr.editor.attrundoable","id":"method-setAttribute","meta":{}},{"name":"undo","tagname":"method","owner":"dr.editor.attrundoable","id":"method-undo","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-dr.editor.attrundoable","short_doc":"An undoable that updates an attribute on a target object that\nhas support for the setAttribute method as defined in d...","component":false,"superclasses":["dr.eventable","dr.editor.undoable"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>dr.eventable<div class='subclass '><a href='#!/api/dr.editor.undoable' rel='dr.editor.undoable' class='docClass'>dr.editor.undoable</a><div class='subclass '><strong>dr.editor.attrundoable</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/attrundoable.html#dr-editor-attrundoable' target='_blank'>attrundoable.js</a></div></pre><div class='doc-contents'><p>An undoable that updates an attribute on a target object that\nhas support for the setAttribute method as defined in dr.AccessorSupport\nsuch as <a href=\"#!/api/dr.node\" rel=\"dr.node\" class=\"docClass\">dr.node</a> and <a href=\"#!/api/dr.view\" rel=\"dr.view\" class=\"docClass\">dr.view</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-attribute'>Attributes</h3><div class='subsection'><div id='attribute-attribute' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.attrundoable'>dr.editor.attrundoable</span><br/><a href='source/attrundoable.html#dr-editor-attrundoable-attribute-attribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.attrundoable-attribute-attribute' class='name expandable'>attribute</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The name of the attribute to update.</p>\n</div><div class='long'><p>The name of the attribute to update.</p>\n</div></div></div><div id='attribute-done' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.editor.undoable' rel='dr.editor.undoable' class='defined-in docClass'>dr.editor.undoable</a><br/><a href='source/undoable.html#dr-editor-undoable-attribute-done' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.undoable-attribute-done' class='name expandable'>done</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>Indicates if this undoable is in the \"done\" or \"undone\" state. ...</div><div class='long'><p>Indicates if this undoable is in the \"done\" or \"undone\" state.\nUndoables begin in the undone state.</p>\n</div></div></div><div id='attribute-newvalue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.attrundoable'>dr.editor.attrundoable</span><br/><a href='source/attrundoable.html#dr-editor-attrundoable-attribute-newvalue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.attrundoable-attribute-newvalue' class='name expandable'>newvalue</a> : expression<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The done value of the attribute.</p>\n</div><div class='long'><p>The done value of the attribute.</p>\n</div></div></div><div id='attribute-oldvalue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.attrundoable'>dr.editor.attrundoable</span><br/><a href='source/attrundoable.html#dr-editor-attrundoable-attribute-oldvalue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.attrundoable-attribute-oldvalue' class='name expandable'>oldvalue</a> : expression<span class=\"signature\"></span></div><div class='description'><div class='short'>The undone value of the attribute. ...</div><div class='long'><p>The undone value of the attribute. If not provided the current value\nof the attribute on the target object will be stored the first time\nredo is executed.</p>\n</div></div></div><div id='attribute-redodescription' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.editor.undoable' rel='dr.editor.undoable' class='defined-in docClass'>dr.editor.undoable</a><br/><a href='source/undoable.html#dr-editor-undoable-attribute-redodescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.undoable-attribute-redodescription' class='name expandable'>redodescription</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A human readable representation of the undoable. ...</div><div class='long'><p>A human readable representation of the undoable. The description\nshould describe what will be done/redone when the undoable is\nexecuted.</p>\n</div></div></div><div id='attribute-target' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.attrundoable'>dr.editor.attrundoable</span><br/><a href='source/attrundoable.html#dr-editor-attrundoable-attribute-target' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.attrundoable-attribute-target' class='name expandable'>target</a> : dr.AccessorSupport<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The target object that will have setAttribute called on it.</p>\n</div><div class='long'><p>The target object that will have setAttribute called on it.</p>\n</div></div></div><div id='attribute-undodescription' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dr.editor.undoable' rel='dr.editor.undoable' class='defined-in docClass'>dr.editor.undoable</a><br/><a href='source/undoable.html#dr-editor-undoable-attribute-undodescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.undoable-attribute-undodescription' class='name expandable'>undodescription</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A human readable representation of the undoable. ...</div><div class='long'><p>A human readable representation of the undoable. The description\nshould describe what will be undone when the undoable is\nexecuted.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-__getDescription' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.attrundoable'>dr.editor.attrundoable</span><br/><a href='source/attrundoable.html#dr-editor-attrundoable-method-__getDescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.attrundoable-method-__getDescription' class='name expandable'>__getDescription</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getRedoDescription' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.attrundoable'>dr.editor.attrundoable</span><br/><a href='source/attrundoable.html#dr-editor-attrundoable-method-getRedoDescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.attrundoable-method-getRedoDescription' class='name expandable'>getRedoDescription</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>@overrides\nGets the redo description using the value of the redodescription\nattribute as a text template which will h...</div><div class='long'><p>@overrides\nGets the redo description using the value of the redodescription\nattribute as a text template which will have the this.attribute,\nthis.oldvalue and this.newvalue injected into it. See dr.fillTextTemplate\nfor more info on how text templates work.</p>\n<p>Overrides: <a href=\"#!/api/dr.editor.undoable-method-getRedoDescription\" rel=\"dr.editor.undoable-method-getRedoDescription\" class=\"docClass\">dr.editor.undoable.getRedoDescription</a></p></div></div></div><div id='method-getUndoDescription' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.attrundoable'>dr.editor.attrundoable</span><br/><a href='source/attrundoable.html#dr-editor-attrundoable-method-getUndoDescription' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.attrundoable-method-getUndoDescription' class='name expandable'>getUndoDescription</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>@overrides\nGets the undo description using the value of the undodescription\nattribute as a text template which will h...</div><div class='long'><p>@overrides\nGets the undo description using the value of the undodescription\nattribute as a text template which will have the this.attribute,\nthis.oldvalue and this.newvalue injected into it. See dr.fillTextTemplate\nfor more info on how text templates work.</p>\n<p>Overrides: <a href=\"#!/api/dr.editor.undoable-method-getUndoDescription\" rel=\"dr.editor.undoable-method-getUndoDescription\" class=\"docClass\">dr.editor.undoable.getUndoDescription</a></p></div></div></div><div id='method-redo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.attrundoable'>dr.editor.attrundoable</span><br/><a href='source/attrundoable.html#dr-editor-attrundoable-method-redo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.attrundoable-method-redo' class='name expandable'>redo</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>@overrides\nSets the attribute on the target object to the newvalue. ...</div><div class='long'><p>@overrides\nSets the attribute on the target object to the newvalue. Also stores\nthe current value of the target object as the oldvalue if this is the\nfirst time redo is called successfully.</p>\n</div></div></div><div id='method-setAttribute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.attrundoable'>dr.editor.attrundoable</span><br/><a href='source/attrundoable.html#dr-editor-attrundoable-method-setAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.attrundoable-method-setAttribute' class='name expandable'>setAttribute</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>@overrides\nPrevent resolution of constraints since the values we wish to store\nfor oldvalue and newvalue will often b...</div><div class='long'><p>@overrides\nPrevent resolution of constraints since the values we wish to store\nfor oldvalue and newvalue will often be the string value of a\nconstraint.</p>\n</div></div></div><div id='method-undo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='dr.editor.attrundoable'>dr.editor.attrundoable</span><br/><a href='source/attrundoable.html#dr-editor-attrundoable-method-undo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dr.editor.attrundoable-method-undo' class='name expandable'>undo</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>@overrides\nSets the attribute on the target object to the oldvalue. ...</div><div class='long'><p>@overrides\nSets the attribute on the target object to the oldvalue.</p>\n<p>Overrides: <a href=\"#!/api/dr.editor.undoable-method-undo\" rel=\"dr.editor.undoable-method-undo\" class=\"docClass\">dr.editor.undoable.undo</a></p></div></div></div></div></div></div></div>","meta":{}});