/* global SegmentDisplay */
/* global angular */
angular.module('ui').directive('uiSegmentdisplay', [ '$timeout', '$interpolate',
    function ($timeout, $interpolate) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/ui-segmentdisplay/ui-segmentdisplay.html',
            link: function(scope, element, attrs) {
                $timeout(function() {
                    var disp, unreg;

                    scope.$watch('me.item.name', function() {
                        var dispOptions = {
                            id: 'disp_' + scope.$eval('$id'),
                            value: scope.$eval('me.item.value'),
                        }
                        disp = new SegmentDisplay(dispOptions.id);
                        disp.pattern = "#####";
                        disp.digitHeight = 11;
                        disp.digitWidth = 7;
                        disp.cornerType = 3;
                        disp.displayType = 7;
                        disp.displayAngle = 9;
                        disp.digitDistance = 1;
                        disp.segmentWidth = 1;
                        disp.segmentDistance = 0.5;
                        disp.colorOn = "red";
                        disp.colorOff = '#222222';
                        disp.setValue("    ");
                        unreg = scope.$watch('me.item.value', function(newValue) {
                            var txtVal =  ("    " + newValue).slice(-5); 
                            disp.setValue(txtVal);
                        });
                    });
                }, 0);
            }
        }
    }]);
