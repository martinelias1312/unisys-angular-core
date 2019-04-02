import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { activityLog } from '../models';
import { UnisysAngularAppStateServiceService } from '@weareunite/unisys-angular-app-state-service';
import { ApolloService } from './apollo.service';
import { BaseApolloService } from './baseApollo.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService extends BaseApolloService {
  private activityLog: activityLog;

  // Apollo
  protected selection = 'id, log_name, description, properties, subject_id, subject_type, causer_id, causer_type, created_at';
  protected selectionPlural = 'id, description, subject_type, created_at';
  protected operationType = 'activityLog';
  protected operationTypePlural = 'activityLogs';

  constructor(
    protected http: HttpService,
    protected apollo: ApolloService,
    protected appStateService: UnisysAngularAppStateServiceService,
  ) {
    super(http, appStateService, apollo);
  }

}
