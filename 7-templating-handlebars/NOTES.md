# Handlebars 

## The Basics

Context Object: `{ name: 'Tim' }`

Template: `<p>Hello, {{ name }} </p>`

- **Note:** to escape html, we can use triple *'stashes* `{{{ html-escaped-value }}}`


## Comments

`{{! this is a comment }}`


## Blocks

- Blocks provide *flow control, conditional execution and extensibility*

```js
{

	currency: {
		name: 'United States dollars',
		abbrev: 'USD',
	},
	tours: [
		{ id: 0, name: 'Hood River', price: 99.99 },
		{ id: 1, name: 'Oregon Coast', price 149.95 },
	],
	specialsUrl: '/january-specials',
	currencies: [ 'USD', 'GBP', 'BTC' ],

}

```

Given the context object above, we can form a template the following way:

```html
<ul>
	{{#each tours}}
	<li>
		{{ name }} - {{ price }}
		{{#if ../curencies}}
			({{../currency.abbrev}})
		{{/if}}
	</li>
	{{/each}}
</ul>
{{#unless currencies}}
	<p>All prices in {{ currency.name }}</p>
{{/unless}}
{{#if specialsUrl}}
	{{! I'm in a new block... but the context hasn't changed }}
	<p>Check out our <a href="{{specialsUrl}}">specials!</p>
	}
{{else}}
	<p>Please check back often for specials.</p>
{{/if}}
<p>
{{#each currencies}}
	<a href="#" class="currency">{{.}}</a>
{{else}}
	Unfortunately we currently only accept {{ currency.name }}.
{{/each}}
</p>
```


## Server-side Templates
`TODO`

## Views and Layouts
`TODO`

## Sections
`TODO`


## Partials
`TODO`

