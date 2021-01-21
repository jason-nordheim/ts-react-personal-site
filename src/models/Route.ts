export class Route {
  public path: string;
  public label: string;
  public component: React.FunctionComponent;
  public exact: boolean | undefined;

  constructor(
    path: string,
    label: string,
    component: React.FunctionComponent,
    exact?: boolean
  ) {
    this.path = path;
    this.label = label;
    this.component = component;
    this.exact = exact;
  }
}
