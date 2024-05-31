import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { Accordion } from 'flowbite';
import type { AccordionOptions, AccordionItem, AccordionInterface } from 'flowbite';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements AfterViewInit {
  accordionItems = [
    {
      id: 'accordion-example-heading-1',
      heading: 'What is Flowbite?',
      bodyText: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.',
      links: [
        {
          text: 'get started',
          url: '/docs/getting-started/introduction/'
        }
      ]
    },
    {
      id: 'accordion-example-heading-2',
      heading: 'How does it work?',
      bodyText: 'Flowbite works by providing a set of pre-designed components that you can easily integrate into your project. You can customize these components to fit your design needs. For more information, refer to the documentation.',
      links: [
        {
          text: 'documentation',
          url: '/docs/getting-started/introduction/'
        }
      ]
    },
    // Add other accordion items here with unique IDs
  ];

  ngAfterViewInit(): void {
    const accordionEl = document.querySelector('#accordion-example') as HTMLElement;

    const accordionItems: AccordionItem[] = this.accordionItems.map(item => ({
      id: item.id,
      triggerEl: document.querySelector(`#${item.id}`) as HTMLElement,
      targetEl: document.querySelector(`#${item.id}-body`) as HTMLElement,
      active: false
    }));

    const options: AccordionOptions = {
      alwaysOpen: true,
      activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
      inactiveClasses: 'text-gray-500 dark:text-gray-400',
      onOpen: (accordion: AccordionInterface, item: AccordionItem) => {
        console.log('accordion item has been shown');
        this.toggleIcon(item.triggerEl, true);
      },
      onClose: (accordion: AccordionInterface, item: AccordionItem) => {
        console.log('accordion item has been hidden');
        this.toggleIcon(item.triggerEl, false);
      },
      onToggle: (accordion: AccordionInterface, item: AccordionItem) => {
        console.log('accordion item has been toggled');
        this.toggleIcon(item.triggerEl, item.active ?? false);
      },
    };

    new Accordion(accordionEl, accordionItems, options);
  }

  toggleIcon(triggerEl: HTMLElement, isOpen: boolean) {
    const iconEl = triggerEl.querySelector('.material-symbols-outlined');
    if (iconEl) {
      iconEl.textContent = isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    }
  }
}
