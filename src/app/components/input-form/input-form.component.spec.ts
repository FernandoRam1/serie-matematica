import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SerieClass } from 'src/app/classes/serie';
import { ResultViewComponent } from '../result-view/result-view.component';
import { InputFormComponent } from './input-form.component';

describe('InputFormComponent', () => {
  let component: InputFormComponent;
  let fixture: ComponentFixture<InputFormComponent>;
  let classes: SerieClass;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [InputFormComponent, ResultViewComponent],
      providers: [SerieClass],
    }).compileComponents();
    classes = new SerieClass();

    fixture = TestBed.createComponent(InputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do calculation with 0', () => {
    expect(component.resultSerie).toBe(0);
    component.clickButton();
    component.resultSerie = classes.calculateSerie(0);
    expect(component.resultSerie).toBe(
      'No se puede calcular el número primo de 0. Intenta con otro número, por favor.'
    );
  });

  it('should do calculation with 1', () => {
    expect(component.resultSerie).toBe(0);
    component.clickButton();
    component.resultSerie = classes.calculateSerie(1);
    expect(component.resultSerie).toBe(
      'No se puede calcular el número primo de 1. Intenta con otro número, por favor.'
    );
  });

  it('should do calculation with 2', () => {
    expect(component.resultSerie).toBe(0);
    component.clickButton();
    component.resultSerie = classes.calculateSerie(2);
    expect(component.resultSerie).toBe(6);
  });

  it('should do calculation with 3', () => {
    expect(component.resultSerie).toBe(0);
    component.clickButton();
    component.resultSerie = classes.calculateSerie(3);
    expect(component.resultSerie).toBe(9);
  });

  it('should do calculation with 4', () => {
    expect(component.resultSerie).toBe(0);
    component.clickButton();
    component.resultSerie = classes.calculateSerie(4);
    expect(component.resultSerie).toBe(10);
  });

  it('should do calculation with 5', () => {
    expect(component.resultSerie).toBe(0);
    component.clickButton();
    component.resultSerie = classes.calculateSerie(5);
    expect(component.resultSerie).toBe(15);
  });

  it('should do calculation with 6', () => {
    expect(component.resultSerie).toBe(0);
    component.clickButton();
    component.resultSerie = classes.calculateSerie(6);
    expect(component.resultSerie).toBe(13.125);
  });

  it('should do calculation with 7', () => {
    expect(component.resultSerie).toBe(0);
    component.clickButton();
    component.resultSerie = classes.calculateSerie(7);
    expect(component.resultSerie).toBe(15.076923076923077);
  });

  it('should do calculation with 8', () => {
    expect(component.resultSerie).toBe(0);
    component.clickButton();
    component.resultSerie = classes.calculateSerie(8);
    expect(component.resultSerie).toBe(12);
  });

  it('should do calculation with 9', () => {
    expect(component.resultSerie).toBe(0);
    component.clickButton();
    component.resultSerie = classes.calculateSerie(9);
    expect(component.resultSerie).toBe(9.264705882352942);
  });
});
