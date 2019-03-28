define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojchart'],
  function (oj, ko, $) {

    function DashboardViewModel() {
      var self = this;

      // programmatic navigation to the Products tab
      self.enterCatalog = function () {
        oj.Router.rootInstance.go('customers');
      }

      self.stackValue = ko.observable('on');
      self.orientationValue = ko.observable('vertical');

      /* chart data */
      var barSeries = [{
          name: "Series 1",
          items: [74, 42, 70, 46]
        },
        {
          name: "Series 2",
          items: [50, 58, 46, 54]
        },
        {
          name: "Series 3",
          items: [34, 22, 30, 32]
        },
        {
          name: "Series 4",
          items: [18, 6, 14, 22]
        }
      ];

      var barGroups = ["Group A", "Group B", "Group C", "Group D"];

      self.barSeriesValue = ko.observableArray(barSeries);
      self.barGroupsValue = ko.observableArray(barGroups);

    }

    return new DashboardViewModel();
  }
);