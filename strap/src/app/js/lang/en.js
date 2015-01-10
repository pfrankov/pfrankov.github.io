(function(i100500n){
	if ( !i100500n ) {
		return;
	}

	i100500n.lang.en = {
		header: {
			basics: "Basics",
			layout: "Layout",
			functions: "Functions",
			mixins: "Mixins"
		},
		download: "Download",
		basics: {
			whatisstrap: {
				_: "What is STRAP?",
				t1: "STRAP is awesome Compass boilerplate with outstanding features inside. It is more than just another CSS framework." +
					"It is starting point of your project and way how you manage your files."
			},
			features: {
				_: "What kind of features?",
				t1: "Features like responsive nested grids with vertical alignment, like themes, like usefull mixins" +
					"and functions, like simple sprites (in original Compass it is so complicated) and" +
					"maybe more (I can just forget to update this description)."
			},
			support: {
				_: "Browsers support",
				t1: "Modern browsers, modern mobile browsers, IE8+"
			},
			requirements: {
				_: "Requirements",
				t1: "Just",
				t2: "After that in command line",
				t3: "And in working directory"
			},
			createproject: {
				_: "Creating a project",
				t1: "Run in working directory:",
				server: "to run development server",
				tests: "to run development server AND tests",
				or: "or",
				build: "to build project into",
				dir: " directory"
			},
			styleguides: {
				_: "Styleguides",
				html: {
					classes: "<b>Classes</b> of STRAP's components are named in <code>UpperCamelCase</code> (which is good if you are using a different style);",
					id: "<b>ID</b> and <b>attributes names</b> <code>are-named-by-the-hyphen</code>;",
					name: "Values of <b>name</b> attributes <code>are_named_by_underscore</code>."
				},
				scss: {
					constants: "Constants are named in <code>ALL_UPPER_CASE</code>;",
					variables: "Variables, mixins and functions <code>are-named-by-the-hyphen</code>;",
					private: "<code>_underscore</code> is appended before name of private variables, mixins and functions;",
					comments: "Commenting in SCSS-files is only performed with a double slash <code>//</code>"
				}
			},
			structure: {
				_: "Project's structure",
				t1: "It is not clean STRAP, but a project of documentation that you are watching right now.",
				t2: "Everything is more or less obvious, so I'll stop on most unobvious: directory <code>sass</code>. All files in this directory should be compiled in CSS files."+
					"Inside each of them is assembled STRAP with all sorts of modules: mixins, functions, additional classes, themes.",
				t3: "Almost all of the content <code>/sass/strap/</code>, with the exception of <code>/sass/strap/strap-lib/</code> is a custom extension of existing STRAP mixins, functions, configs, etc.",
				t4: "Clicking on the name of the folder, you can see what is inside it. In addition, many files and folders are provided with a brief description of its purpose.",
				config: "Compass config file",
				css: {
					_: "Compiled CSS and fonts",
					fixes: "Overriding styles for those who can't install Compass",
					fonts: {
						_: "Fonts",
						icons: {
							_: "Font icons",
							t1: "* Font icons files *"
						}
					}
				},
				executable: {
					_: "Executable files of project (watchers)",
					t1: "Execute watcher on changes in sass directory for Windows",
					t2: "Execute watcher on changes in sass directory for Mac and *nix"
				},
				htmltemplates: {
					_: "Main directory for layout",
					main: "Main layout file"
				},
				images: {
					_: "Directory for images and sprites of your project",
					sprites: {
						_: "Sprites",
						controls: "Sprites of interactive elements",
						icons: "Sprites of icons"
					},
					themes: {
						_: "Images for themes",
						strapdocs: {
							_: "Images of STRAPDocs theme",
							sprites: {
								_: "Sprites",
								icons: "Sprites of icons",
								browsers: {
									_: "Browsers icons for example",
									t1: "* Icons of different browsers *"
								},
								sprite: "Compiled sprite of icons of different browsers"
							},
							t1: "* Theme's images *"
						}
					}
				},
				img: "Directory for dynamic images (avatars, uploaded images)",
				js: {
					_: "JavaScript files",
					common: "Common JavaScript file"
				},
				sass: {
					_: "SCSS files",
					strap: {
						_: "STRAP files",
						init: "Only one outside included file, which assemble all STRAP",
						config: "Editable config inheritable from constants",
						functions: "User's functions file",
						mixins: "User's mixins file",
						straplib: "Secret directory. Not for changes",
						misc: {
							_: "Miscellaneous",
							normalize: "Normalier"
						},
						themes: {
							_: "Themes",
							strapdoc: {
								_: "STRAPDocs theme",
								modules: {
									_: "Theme's modules",
									paginator: "Paginator module, used by theme"
								},
								ui: {
									_: "View of theme",
									theme: "Basic description of theme. Includes theme's elements."
								},
								config: "Config of this theme",
								functions: "Functions of this theme",
								mixins: "Mixins of this theme",
								init: "Main and required file of any theme"
							},
							yourtheme: {
								_: "Minimal theme",
								ui: {
									_: "View of theme",
									theme: "Basic description of theme"
								},
								init: "Main and required file of any theme"
							}
						},
						ui: {
							_: "Evenrything which related to view",
							helpers: "Useful classes"
						}
					}
				},
				initialization: {
					_: "How the typical initialization is looks like",
					init: "Initializing",
					include: "You can import all ui styles in one row",
					separately: "or do that separately",
					theme: "You can import entire theme",
					parts: "Or just some useful parts from it"
				},
				advices: {
					_: "Some tips for maintaining the structure",
					t1: "Use hyphens <code>-</code> to separate the names of files and directories;",
					t2: "All directories with sprites (e.q. inside of <code>/images/sprites/</code>) must be prefixed by underscore <code>_</code> for the correct generation;",
					t3: "Absolutely all the files inside <code>/sass/strap/</code> must be prefixed by underscore <code>_</code>, to not be compilated as separate files;",
					t4: "Files with a double underscore <code>__</code> does not contain CSS at root (for example, files with mixins, functions, config);",
					t5: "Theme's files should not have any requests from the parent directory, but instead they should indicate the requested files at the description of the theme;",
					t6: "It is not recommended to change the contents of directory <code>/sass/strap/strap-lib</code> — any behavior can be overridden in the user files."
				}
			}
		},
		layout: {
			container: {
				_: "The most basic class",
				t1: "<code class='language-css'>.Container</code> — class, which is centers the content on the page. Recommended for use as a wrapper (see source code for this page)."
			},
			grid: {
				_: "Grid",
				t1: "<b>12</b> columns, with <b>60px</b> width and with <b>20px</b> indents by default, which makes a total grid as <b>960px</b>.",
				t2: "You can change default values in the config file <code>/sass/strap/__config.scss</code>",
				howtouse: {
					_: "How to use it?",
					t1: "We have 12 columns total, and we can divide them as we wish. The main thing is that the parts should be whole.",
					t2: "1. Firstly we need block  <code class='language-css'>.Row</code> which respresents single row.",
					t3: "2. Now it would be good idea divide them into several columns (8 and 4 for example)",
					t4: "3. And finally, add the <code class='language-css'>.Content</code> block inside of each column (optional).",
					e1: "8 columns",
					e2: "4 columns"
				},
				nested: {
					_: "Nested columns",
					t1: "No additional magic is required. Just put one more the <code class='language-css'>.Row</code> block inside of column."
				},
				verticalrhythm: {
					_: "Vertical Rhythm",
					t1: "All vertical indents, all sizes of all elements is multiple of line height, which makes the page more harmonious*.",
					t2: "* — Actually that is not true: there is impossible to make vertical rhythm without manual adjustments. However even suggested vertical rhythm is better than nothing.",
					w1: "Do not break the harmony!",
					w2: "Watch for the vertical rhythm!",
					picture: "Image for attract attention to the problem of vertical rhythm compliance"
				},
				verticalalign: {
					_: "Vertical Alignment!",
					top: "This block should be<br/>somewhere on the top.",
					middle: "This block — at the middle.",
					bottom: "And this — should be pinned to the bottom."
				},
				responsive: {
					_: "Responsive",
					t1: "By default: when we reaches a certain value of screen size, columns turn into a list and falling under each other and also expanding to 100%.",
					t2: "To simplify the layout of blocks for different screen sizes, there are a few simple and useful classes to complement the",
					t3: "columns does not fall at all. Very handy if you need to split a row in half in a mobile version of the site.",
					t4: "columns fall only on the phone resolutions.",
					t5: "columns start to fall from the phone resolutions in landscape orientation.",
					t6: "This example also illustrates the power of nested columns in the adaptive layout.",
					t7: "columns start to fall from the tablet resolutions",
					t8: "columns start to fall from the tablet resolutions in landscape orientation.",

					hide: {
						_: "Hiding",
						t1: "The same classes work to hide elements, depending on the screen resolution. But instead of <code class=\"language-css\">.Break</code> used <code class=\"language-css\">.Hide</code>."
					}
				}
			},
			text: {
				_: "Text",
				header: "Header",
				nomargin: {
					_: "Just add the suitable class to the header to remove margins:",
					top: "Removes top margin",
					bottom: "Removes bottom margin",
					both: "Removes both margins"
				},
				paragraph: "Here is the a usual paragraph.",
				small: "And this is &lt;small&gt;"
			},
			icons: {
				_: "Icons",
				t1: "By default in STRAP built-in <a href=\"http://entypo.com\" target=\"_blank\">Entypo</a> icons. You need to include their classes to use them:",
				t2: "This version is almost right. Almost because inside of <code>/sass/strap/ui/icons/_entypo.scss</code> we can see line <code>// @required ui/icons</code>."+
					"This line means that before you include this file, you need to make sure that the <code>strap/ui/_icons.scss</code> is included already.",
				right: "Right including classes for Entypo icons",
				usage: {
					_: "Icons Usage",
					t1: "<code class=\"language-markup\">&lt;i class=\"Icon Entypo {EntypoIconClass}\"&gt;&lt;/i&gt;</code>, where <code>{EntypoIconClass}</code> — is class of icon from the list bellow:"
				}
			}
		},
		functions: {
			line: "Returns the number of pixels corresponding to the height of <code>lines</code> for <code>font-size</code>. Function is necessary to maintain the vertical rhythm. Used to set the vertical padding and line height."+
				  " Try not to use any other vertical indents. The argument <code class=\"language-javascript\">lines</code> must be a multiple of 0.25",
			gutter: "Returns a specified number of horizontal indentation defined by a constant <code>$GUTTER_WIDTH</code>. Try not to use any other horizontal indents."+
					" The argument <code class=\"language-javascript\">lines</code> must be a multiple of 0.25",
			shadowsteps: "Creates a series of shadows, used <code>box-shadow</code> property, and <code>text-shadow</code>. The series consists of shadows <code>depth</code>, each of which is represented by <code>(depth * x) (depth * y) color size inset</code>. Used to create three-dimensional effects."
		},
		mixins: {
			fontsize: "Set the font size in <code>rem</code> (with backwards compatibility) and the corresponding height of the line to get into the vertical rhythm. Always set the font size by this mixin.",
			loadfont: "Includes the font files in the directory <code>/css/fonts/</code>. One typeface fonts need a common name <code>file-name-without-extension</code> and to be presented in four formats: eot, svg, ttf, woff. <code>font-weight</code> and <code>font-style</code> arguments are set via <code>weight</code> and <code>style</code>.",
			heading: "Sets the indentation at the base lines: <code>top-lines</code> above and the <code>bottom-lines</code> below, as well as the <code>font-size</code> for the header. It is necessary for compliance with the vertical rhythm titles.",
			allheaders: "Allows you to set styles for h1, h2, h3, h4, h5, h6 once.",
			breakpoint: "Creates breakpoints for adaptive layout. If the second argument passed, the rules triggered a range of resolutions from the <code>start</code> up to <code>end</code> resolutions. "+
						"The values of arguments can be <i>px</i> or fixed values (&nbsp;<i>phone</i> | <i>phone&nbsp;landscape</i> | <i>tablet</i> | <i>tablet&nbsp;landscape</i> | <i title=\"Content width\">content</i>&nbsp;), redefined in <code>/sass/strap/__config.scss</code>.",
			spritedir: "Creates a sprite of png from images folder _<code>dir-name (without prefix)</code>, located in the <code>sprites-dir</code> (by default in <code>/images/sprites/</code>). Used with <code>sprite-file</code>.",
			spritefile: {
				_: "Returns an image offset and size of the sprite <code>file-name</code>, which is located in the _<code>dir-name</code>, established from last call of <code>sprite-dir (dir-name)</code>.",
				t1: "Creates a sprite from all .png inside",
				t2: "Points to a file"
			},
			keyframes: "Polyfill for writing animations with the name <code>name</code>.",
			animations: "Polyfill for appending animation to an element."

		},
		footer: {
			header: "That's it?",
			t1: "In fact, most of the STRAP is not described in this document, even though he had already turned unnecessarily bloated and completely incomprehensible.",
			t3: "The version number of hints that the work on the STRAP just begun and I could use your help.",
			t4: "If you have questions or suggestions for STRAP — feel fre to contact <a href=\"https://twitter.com/twenty\" target=\"_blank\">@twenty</a> with a hashtag #STRAPonSass.",
			t5: "This translation from Russian is ugly. But if you know English better than me — please, push any changes into <a href=\"https://github.com/pfrankov/pfrankov.github.io\">Github</a>. Thank you!"
		}
	};

})(i100500n);