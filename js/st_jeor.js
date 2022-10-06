<!DOCTYPE html>
<html ng-app="app">

  <head>
    <link data-require="bootstrap@*" data-semver="3.3.5" rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
    <link data-require="font-awesome@*" data-semver="4.3.0" rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
    <script data-require="jquery@*" data-semver="2.1.4" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script data-require="bootstrap@*" data-semver="3.3.5" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script data-require="angular.js@1.4.3" data-semver="1.4.3" src="https://code.angularjs.org/1.4.3/angular.js"></script>
    <script data-require="ui-router@*" data-semver="0.2.15" src="//rawgit.com/angular-ui/ui-router/0.2.15/release/angular-ui-router.js"></script>
    <script data-require="underscore.js@*" data-semver="1.8.3" src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
    <link rel="stylesheet" href="style.css" />
    <script src="app.js"></script>
    <script src="MainController.js"></script>
    <script src="directives.js"></script>
  </head>

  <body ng-controller="mainController as vm">
    <!--
    <div>
      Hello Plunker! <i class="fa fa-user fa-fw"></i>
    </div>
    -->
    <h3>Mifflin-St Jeor Formula</h3>
    <div class="row">
      <div class="col-sm-4">
        <div class="form-group">
          <div class="radio">
            <label>
              <input type="radio" ng-model="vm.gender" value="male">
              male
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" ng-model="vm.gender" value="female">
              female
            </label>
          </div>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" ng-model="vm.weightKg" ng-model-options="{debounce: 500}" placeholder="weight in kg">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" ng-model="vm.heightCm" ng-model-options="{debounce: 500}" placeholder="height in cm">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" ng-model="vm.ageYears" ng-model-options="{debounce: 500}" placeholder="age in years">
        </div>
        <div class="form-group">
          <label for="mySelect">Activity:</label>
          <select name="mySelect" id="mySelect" class="form-control"
            ng-options="option.name for option in vm.activityOptions track by option.name"
            ng-model="vm.selectedActivity"></select>
        </div>
      </div>

      <div class="col-sm-4">
        Kinobody estimated Maintenance Calories: {{vm.formatCalNumber(vm.kinobodyEstimateMaintenanceCalories)}}<br/>
        <hr />
        Mifflin-St Jeor Formula BMR: {{vm.formatCalNumber(vm.bmr)}}<br />
        Total Energy Expenditure TEE: {{vm.formatCalNumber(vm.tee)}}
      </div>
      <div class="col-sm-4">

      </div>
    </div>

    <!--
    <div>
      <button class="btn btn-primary" ng-click="vm.testFunction()">Execute</button>
      <br />
      {{vm.name}}<br />
      <input type="text" ng-model="vm.name" />
      <br />
    </div>
    <div>
      {{vm.url}}
    </div>
    -->

    <!--
    <div>
      {{vm.dataSet.length}}
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Has fun?</th>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat="d in vm.dataSet">
            <td>{{d.id}}</td>
            <td>{{d.name}}</td>
            <td>{{d.location}}</td>
            <td>
              <boolean-switcher value="d.hasFun" method="vm.switchedFun(d, testValue)"></boolean-switcher>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    -->

  </body>

</html>
