import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { InputBoolean } from '@pixelmon/util';

const CLSBODY = 'footer-toolbar__body';

@Component({
  selector: 'footer-toolbar',
  exportAs: 'footerToolbar',
  templateUrl: './footer-toolbar.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FooterToolbarComponent implements OnInit, OnDestroy {
  @Input() @InputBoolean() errorCollect = false;
  @Input() extra: string | TemplateRef<void>;

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private doc: any) {}

  private get bodyCls() {
    return this.doc.querySelector('body').classList;
  }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'footer-toolbar');
    this.bodyCls.add(CLSBODY);
  }

  ngOnDestroy() {
    this.bodyCls.remove(CLSBODY);
  }
}
