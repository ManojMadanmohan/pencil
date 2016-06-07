function EditToolbar() {
    ToolBar.call(this);
}
__extend(ToolBar, EditToolbar);

EditToolbar.prototype.registerCommands = function () {
    UICommandManager.register({
        key: "cutCommand",
        watchEvents: "p:TargetChanged",
        label: "Cut",
        icon: "content_cut",
        isValid: function () { return Pencil.activeCanvas.currentController; },
        run: function () {
            Pencil.activeCanvas.doCopy();
            Pencil.activeCanvas.deleteSelected();
        }
    });
    UICommandManager.register({
        key: "copyCommand",
        watchEvents: "p:TargetChanged",
        label: "Copy",
        icon: "content_copy",
        isValid: function () { return Pencil.activeCanvas.currentController; },
        run: function () {
            Pencil.activeCanvas.doCopy();
        }
    });
    UICommandManager.register({
        key: "pasteCommand",
        label: "Paste",
        icon: "content_paste",
        isValid: function () { return true; /*FIXME: check for clipboard content*/ },
        run: function () {
            Pencil.activeCanvas.doPaste();
        }
    });
};