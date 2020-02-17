import { AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, Injector, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CdkPortal, ComponentPortal, DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  @ViewChild(CdkPortal, {static: false}) contactPortal: TemplatePortal;
  test: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private appRef: ApplicationRef) {
  }

  ngAfterViewInit() {
    const portalTag = document.querySelector('#portal-outlet');
    const portalOutlet = new DomPortalOutlet(
      portalTag,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );
    portalTag.innerHTML = '';
    this.contactPortal.attach(portalOutlet);
  }

  ngOnDestroy() {
    this.contactPortal.detach();
  }
}
