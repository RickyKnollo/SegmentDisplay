/* global SegmentDisplay */
/* global angular */
/* global pad */
angular.module('ui').directive('uiSegmentdisplay', [ '$timeout', '$interpolate',
    function ($timeout, $interpolate) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/ui-segmentdisplay/ui-segmentdisplay.html',
            link: function(scope, element, attrs) {
                $timeout(function() {
                    var disp,padlen;

                    scope.$watch('me.item.name', function() {
                        disp = new SegmentDisplay('disp_' + scope.$eval('$id'));
                        disp.pattern = scope.$eval('me.item.pattern');
                        disp.digitHeight = scope.$eval('me.item.digitHeight');
                        disp.digitWidth = scope.$eval('me.item.digitWidth');
                        disp.cornerType = scope.$eval('me.item.cornerType');
                        disp.displayAngle = scope.$eval('me.item.displayAngle');
                        disp.digitDistance = scope.$eval('me.item.digitDistance');
                        disp.segmentCount = scope.$eval('me.item.segmentCount');
                        disp.segmentWidth = scope.$eval('me.item.segmentWidth');
                        disp.segmentDistance = scope.$eval('me.item.segmentDistance');
                        disp.colorOn = scope.$eval('me.item.colorOn');
                        disp.colorOff = scope.$eval('me.item.colorOff');
                        disp.valueAlign = scope.$eval('me.item.valueAlign');
                        disp.draw();
                        padlen=disp.pattern.length;
                        console.log(disp);
                        scope.$watch('me.item.value', function(newValue) {
                            var txtVal=String(newValue);
                            switch (disp.valueAlign) {
                                case 1: { //Left
                                    txtVal = txtVal.padEnd(padlen);
                                    break;
                                }
                                case 2: { //Center
                                    var spaces = padlen - txtVal.length;
                                    if ( spaces > 2 ) {
                                        txtVal = txtVal.padStart(padlen).slice(Math.ceil(spaces/2),padlen).padEnd(padlen);
                                    }
                                    break;
                                }
                                case 3: { //Right
                                    txtVal = txtVal.padStart(padlen);
                                    break;
                                }
                            }
                            disp.setValue(txtVal);
                        });
                    });
                }, 0);
            }
        }
    }]);
