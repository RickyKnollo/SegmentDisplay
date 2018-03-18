module.exports = function(RED) {
    var ui = require('../ui')(RED);

    function SegmentDisplayNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        var group = RED.nodes.getNode(config.group);
        if (!group) { return; }
        var tab = RED.nodes.getNode(group.config.tab);
        if (!tab) { return; }

        var layout = config.layout||"row-spread";
        var angLayout = "row";
        var angLayoutAlign = "space-between center";
        if (layout === "row-spread") { angLayout = 'row'; angLayoutAlign = 'space-between center'}
        else if (layout === "row-left") { angLayout = 'row'; angLayoutAlign = 'start center'}
        else if (layout === "row-center") { angLayout = 'row'; angLayoutAlign = 'center center'}
        else if (layout === "row-right") { angLayout = 'row'; angLayoutAlign = 'end center'}
        else if (layout === "col-center") { angLayout = 'column'; angLayoutAlign = 'center center'}

        var done = ui.add({
            emitOnlyNewValues: false,
            node: node,
            tab: tab,
            group: group,
            control: {
                type: 'segmentdisplay',
                label: config.label,
                name: config.name,
                order: config.order,
                format: config.format,
                width: config.width || group.config.width || 6,
                height: config.height || 1,
                layout: angLayout,
                layoutAlign: angLayoutAlign
            }
        });

        node.on("close", done);
    }
    RED.nodes.registerType("ui_segmentdisplay", SegmentDisplayNode);
};
