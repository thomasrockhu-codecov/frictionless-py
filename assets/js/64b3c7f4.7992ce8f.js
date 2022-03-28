(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(160)),l=a(188),o=a(189),s=["components"],c={title:"Basic Examples",prepare:["cp data/countries.csv countries.csv"],cleanup:["rm countries.csv","rm countries.resource.yaml"]},p={unversionedId:"guides/basic-examples",id:"guides/basic-examples",isDocsHomePage:!1,title:"Basic Examples",description:"This example assumes that you are familiar with the concepts behind the Frictionless Framework. For an introduction, please read the Introduction.",source:"@site/../docs/guides/basic-examples.md",slug:"/guides/basic-examples",permalink:"/docs/guides/basic-examples",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/basic-examples.md",version:"current",lastUpdatedBy:"Alex Kreidler",lastUpdatedAt:1648464023,formattedLastUpdatedAt:"3/28/2022",sidebar:"guides",previous:{title:"Quick Start",permalink:"/docs/guides/quick-start"},next:{title:"Describing Data",permalink:"/docs/guides/describing-data"}},b=[{value:"Describing Data",id:"describing-data",children:[]},{value:"Extracting Data",id:"extracting-data",children:[]},{value:"Validating Data",id:"validating-data",children:[]},{value:"Transforming Data",id:"transforming-data",children:[]}],u={toc:b};function d(e){var t=e.components,a=Object(i.a)(e,s);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This example assumes that you are familiar with the concepts behind the Frictionless Framework. For an introduction, please read the ",Object(r.b)("a",{parentName:"p",href:"/docs/guides/introduction"},"Introduction"),".")),Object(r.b)("p",null,"Let's start with an example dataset. We will look at a few raw data files that have recently been collected by an anthropologist. The anthropologist wants to publish this data in an open repository so her colleagues can also use this data. Before publishing the data, she wants to add metadata and check the data for errors. We are here to help, so let\u2019s start by exploring the data. We see that the quality of data is far from perfect. In fact, the first row contains comments from the anthropologist! To be able to use this data, we need to clean it up a bit."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Download ",Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/countries.csv"},Object(r.b)("inlineCode",{parentName:"a"},"countries.csv")),' to reproduce the examples (right-click and "Save link as").')),Object(r.b)(l.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"cat countries.csv\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csv",metastring:'title="countries.csv"',title:'"countries.csv"'},"# clean this data!\nid,neighbor_id,name,population\n1,Ireland,Britain,67\n2,3,France,n/a,find the population\n3,22,Germany,83\n4,,Italy,60\n5\n"))),Object(r.b)(o.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},"with open('countries.csv') as file:\n    print(file.read())\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csv",metastring:'title="countries.csv"',title:'"countries.csv"'},"# clean this data!\nid,neighbor_id,name,population\n1,Ireland,Britain,67\n2,3,France,n/a,find the population\n3,22,Germany,83\n4,,Italy,60\n5\n")))),Object(r.b)("p",null,"As we can see, this is data containing information about European countries and their populations. Also, it looks like there are two fields having a relationship based on a country's identifier: neighbor_id is a Foreign Key to id."),Object(r.b)("h2",{id:"describing-data"},"Describing Data"),Object(r.b)("p",null,"First of all, we're going to describe our dataset. Frictionless uses the powerful ",Object(r.b)("a",{parentName:"p",href:"https://specs.frictionlessdata.io/"},"Frictionless Data Specifications"),". They are very handy to describe:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"a data table - using ",Object(r.b)("a",{parentName:"li",href:"https://specs.frictionlessdata.io/table-schema/"},"Table Schema")),Object(r.b)("li",{parentName:"ul"},"a data resource - using ",Object(r.b)("a",{parentName:"li",href:"https://specs.frictionlessdata.io/data-resource/"},"Data Resource")),Object(r.b)("li",{parentName:"ul"},"a data package - using ",Object(r.b)("a",{parentName:"li",href:"https://specs.frictionlessdata.io/data-package/"},"Data Package")),Object(r.b)("li",{parentName:"ul"},"and other objects")),Object(r.b)("p",null,"Let's describe the ",Object(r.b)("inlineCode",{parentName:"p"},"countries")," table:"),Object(r.b)(l.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"frictionless describe countries.csv # optionally add --stats to get statistics\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"# --------\n# metadata: countries.csv\n# --------\n\nencoding: utf-8\nformat: csv\nhashing: md5\nlayout:\n  headerRows:\n    - 2\nname: countries\npath: countries.csv\nprofile: tabular-data-resource\nschema:\n  fields:\n    - name: id\n      type: integer\n    - name: neighbor_id\n      type: string\n    - name: name\n      type: string\n    - name: population\n      type: string\nscheme: file\n"))),Object(r.b)(o.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},"from pprint import pprint\nfrom frictionless import describe\n\nresource = describe('countries.csv')\npprint(resource)\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"{'encoding': 'utf-8',\n 'format': 'csv',\n 'hashing': 'md5',\n 'layout': {'headerRows': [2]},\n 'name': 'countries',\n 'path': 'countries.csv',\n 'profile': 'tabular-data-resource',\n 'schema': {'fields': [{'name': 'id', 'type': 'integer'},\n                       {'name': 'neighbor_id', 'type': 'string'},\n                       {'name': 'name', 'type': 'string'},\n                       {'name': 'population', 'type': 'string'}]},\n 'scheme': 'file'}\n")))),Object(r.b)("p",null,"As we can see, Frictionless was smart enough to understand that the first row contains a comment. It's good, but we still have a few problems:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"we use ",Object(r.b)("inlineCode",{parentName:"li"},"n/a")," as a missing values marker"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"neighbor_id")," must be numerical: let's edit the schema"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"population")," must be numerical: setting proper missing values will solve it"),Object(r.b)("li",{parentName:"ul"},"there is a relation between the ",Object(r.b)("inlineCode",{parentName:"li"},"id")," and ",Object(r.b)("inlineCode",{parentName:"li"},"neighbor_id")," fields")),Object(r.b)("p",null,"Let's update our metadata and save it to the disc:"),Object(r.b)(l.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"frictionless describe countries.csv --yaml > countries.resource.yaml\neditor countries.resource.yaml\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Open this file in your favorite editor and update as it's shown below"))),Object(r.b)(o.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},'from frictionless import Detector, describe\n\ndetector = Detector(field_missing_values=["", "n/a"])\nresource = describe("countries.csv", detector=detector)\nresource.schema.get_field("neighbor_id").type = "integer"\nresource.schema.foreign_keys.append(\n    {"fields": ["neighbor_id"], "reference": {"resource": "", "fields": ["id"]}}\n)\nresource.to_yaml("countries.resource.yaml")\n')))),Object(r.b)("p",null,"Let's see what we have created:"),Object(r.b)(l.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"cat countries.resource.yaml\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"encoding: utf-8\nformat: csv\nhashing: md5\nlayout:\n  headerRows:\n    - 2\nname: countries\npath: countries.csv\nprofile: tabular-data-resource\nschema:\n  fields:\n    - name: id\n      type: integer\n    - name: neighbor_id\n      type: integer\n    - name: name\n      type: string\n    - name: population\n      type: integer\n  foreignKeys:\n    - fields:\n        - neighbor_id\n      reference:\n        fields:\n          - id\n        resource: ''\n  missingValues:\n    - ''\n    - n/a\nscheme: file\n"))),Object(r.b)(o.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},"with open('countries.resource.yaml') as file:\n    print(file.read())\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"encoding: utf-8\nformat: csv\nhashing: md5\nlayout:\n  headerRows:\n    - 2\nname: countries\npath: countries.csv\nprofile: tabular-data-resource\nschema:\n  fields:\n    - name: id\n      type: integer\n    - name: neighbor_id\n      type: integer\n    - name: name\n      type: string\n    - name: population\n      type: integer\n  foreignKeys:\n    - fields:\n        - neighbor_id\n      reference:\n        fields:\n          - id\n        resource: ''\n  missingValues:\n    - ''\n    - n/a\nscheme: file\n")))),Object(r.b)("p",null,"It has the same metadata as we saw above but also includes our editing related to missing values and data types. We didn't change all the wrong data types manually because providing proper missing values had fixed it automatically. Now we have a resource descriptor. In the next section, we will show why metadata matters and how to use it."),Object(r.b)("h2",{id:"extracting-data"},"Extracting Data"),Object(r.b)("p",null,"It's time to try extracting our data as a table. As a first naive attempt, we will ignore the metadata we saved on the previous step:"),Object(r.b)(l.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"frictionless extract countries.csv\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"# ----\n# data: countries.csv\n# ----\n\n==  ===========  =======  ==========\nid  neighbor_id  name     population\n==  ===========  =======  ==========\n 1  Ireland      Britain  67\n 2  3            France   n/a\n 3  22           Germany  83\n 4               Italy    60\n 5\n==  ===========  =======  ==========\n"))),Object(r.b)(o.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},"from pprint import pprint\nfrom frictionless import extract\n\nrows = extract('countries.csv')\npprint(rows)\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[{'id': 1, 'neighbor_id': 'Ireland', 'name': 'Britain', 'population': '67'},\n {'id': 2, 'neighbor_id': '3', 'name': 'France', 'population': 'n/a'},\n {'id': 3, 'neighbor_id': '22', 'name': 'Germany', 'population': '83'},\n {'id': 4, 'neighbor_id': None, 'name': 'Italy', 'population': '60'},\n {'id': 5, 'neighbor_id': None, 'name': None, 'population': None}]\n")))),Object(r.b)("p",null,"Actually, it doesn't look terrible, but in reality, data like this is not quite useful:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"it's not possible to export this data e.g., to SQL because integers are mixed with strings"),Object(r.b)("li",{parentName:"ul"},"there is still a basically empty row we don't want to have"),Object(r.b)("li",{parentName:"ul"},"there are some mistakes in the neighbor_id column")),Object(r.b)("p",null,"Let's use the metadata we save to try extracting data with the help of Frictionless Data specifications:"),Object(r.b)(l.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"frictionless extract countries.resource.yaml\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"# ----\n# data: countries.resource.yaml\n# ----\n\n==  ===========  =======  ==========\nid  neighbor_id  name     population\n==  ===========  =======  ==========\n 1               Britain          67\n 2            3  France\n 3           22  Germany          83\n 4               Italy            60\n 5\n==  ===========  =======  ==========\n"))),Object(r.b)(o.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},"from pprint import pprint\nfrom frictionless import extract\n\nrows = extract('countries.resource.yaml')\npprint(rows)\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[{'neighbor_id': None, 'id': 1, 'name': 'Britain', 'population': 67},\n {'neighbor_id': 3, 'id': 2, 'name': 'France', 'population': None},\n {'neighbor_id': 22, 'id': 3, 'name': 'Germany', 'population': 83},\n {'neighbor_id': None, 'id': 4, 'name': 'Italy', 'population': 60},\n {'neighbor_id': None, 'id': 5, 'name': None, 'population': None}]\n")))),Object(r.b)("p",null,"It's now much better! Numerical fields are numerical fields, and there are no more textual missing values markers. We can't see in the command-line, but missing values are now ",Object(r.b)("inlineCode",{parentName:"p"},"None")," values in Python, and the data can be e.g., exported to SQL. Although, it's still not ready for being published. In the next section, we will validate it!"),Object(r.b)("h2",{id:"validating-data"},"Validating Data"),Object(r.b)("p",null,"Data validation with Frictionless is as easy as describing or extracting data:"),Object(r.b)(l.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"frictionless validate countries.csv\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'# -------\n# invalid: countries.csv\n# -------\n\n===  =====  ============  =============================================================================\nrow  field  code          message\n===  =====  ============  =============================================================================\n  4      5  extra-cell    Row at position "4" has an extra value in field at position "5"\n  7      2  missing-cell  Row at position "7" has a missing cell in field "neighbor_id" at position "2"\n  7      3  missing-cell  Row at position "7" has a missing cell in field "name" at position "3"\n  7      4  missing-cell  Row at position "7" has a missing cell in field "population" at position "4"\n===  =====  ============  =============================================================================\n'))),Object(r.b)(o.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},'from pprint import pprint\nfrom frictionless import validate\n\nreport = validate(\'countries.csv\')\npprint(report.flatten(["rowPosition", "fieldPosition", "code"]))\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[[4, 5, 'extra-cell'],\n [7, 2, 'missing-cell'],\n [7, 3, 'missing-cell'],\n [7, 4, 'missing-cell']]\n")))),Object(r.b)("p",null,"Ahh, we had seen that coming. The data is not valid; there are some missing and extra cells. But wait a minute, in the first step, we created the metadata file with more information about our table. We have to use it."),Object(r.b)(l.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:'script title="CLI"',script:!0,title:'"CLI"'},"frictionless validate countries.resource.yaml\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'# -------\n# invalid: countries.csv\n# -------\n\n===  =====  =================  ==============================================================================================================\nrow  field  code               message\n===  =====  =================  ==============================================================================================================\n  3      2  type-error         Type error in the cell "Ireland" in row "3" and field "neighbor_id" at position "2": type is "integer/default"\n  4      5  extra-cell         Row at position "4" has an extra value in field at position "5"\n  5         foreign-key-error  Row at position "5" violates the foreign key: not found in the lookup table\n  7      2  missing-cell       Row at position "7" has a missing cell in field "neighbor_id" at position "2"\n  7      3  missing-cell       Row at position "7" has a missing cell in field "name" at position "3"\n  7      4  missing-cell       Row at position "7" has a missing cell in field "population" at position "4"\n===  =====  =================  ==============================================================================================================\n'))),Object(r.b)(o.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},'from pprint import pprint\nfrom frictionless import validate\n\nreport = validate(\'countries.resource.yaml\')\npprint(report.flatten(["rowPosition", "fieldPosition", "code"]))\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[[3, 2, 'type-error'],\n [4, 5, 'extra-cell'],\n [5, None, 'foreign-key-error'],\n [7, 2, 'missing-cell'],\n [7, 3, 'missing-cell'],\n [7, 4, 'missing-cell']]\n")))),Object(r.b)("p",null,"Now it's even worse, but regarding data validation errors, the more, the better, actually. Thanks to the metadata, we were able to reveal some critical errors:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the bad data types, i.e. ",Object(r.b)("inlineCode",{parentName:"li"},"Ireland")," instead of an id"),Object(r.b)("li",{parentName:"ul"},"the bad relation between ",Object(r.b)("inlineCode",{parentName:"li"},"id")," and ",Object(r.b)("inlineCode",{parentName:"li"},"neighbor_id"),": we don't have a country with id 22")),Object(r.b)("p",null,"In the next section, we will clean up the data."),Object(r.b)("h2",{id:"transforming-data"},"Transforming Data"),Object(r.b)("p",null,"We will use metadata to fix all the data type problems automatically. The only two things we need to handle manually:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"France's population"),Object(r.b)("li",{parentName:"ul"},"Germany's neighborhood")),Object(r.b)(l.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ cat > countries.pipeline.yaml <<EOF\ntasks:\n  - type: resource\n    source: countries.csv\n    steps:\n      - code: cell-replace\n        fieldName: neighbor_id\n        pattern: '22'\n        replace: '2'\n      - code: cell-replace\n        fieldName: population\n        pattern: 'n/a'\n        replace: '67'\n      - code: row-filter\n        formula: population\n      - code: field-update\n        name: neighbor_id\n        type: integer\n      - code: table-normalize\n      - code: table-write\n        path: countries.csv\nEOF\n$ frictionless transform countries.pipeline.yaml\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"# -------\n# success: countries.pipeline.yaml\n# -------\n"))),Object(r.b)(o.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},'from frictionless import Resource, describe, transform, steps\n\ndef clean(resource):\n    current = resource.to_copy()\n\n    # Data\n    def data():\n        with current:\n            for row in current.row_stream:\n                if row["name"] == "France":\n                    row["population"] = 67\n                if row["name"] == "Germany":\n                    row["neighbor_id"] = 2\n                if row["name"]:\n                    yield row\n\n    # Meta\n    resource.schema = Resource("countries.resource.yaml").schema\n    resource.data = data\n\nsource = describe("countries.csv")\ntarget = transform(\n    source,\n    steps=[\n        clean,\n        steps.table_write(path="countries.csv"),\n    ],\n)\n')))),Object(r.b)("p",null,"Finally, we've got the cleaned version of our data, which can be exported to a database or published. We have used a CSV as an output format but could have used Excel, JSON, SQL, and others."),Object(r.b)(l.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"cat countries.csv\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"id,neighbor_id,name,population\n1,,Britain,67\n2,3,France,67\n3,2,Germany,83\n4,,Italy,60\n"))),Object(r.b)(o.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},"with open('countries.csv') as file:\n    print(file.read())\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"id,neighbor_id,name,population\n1,,Britain,67\n2,3,France,67\n3,2,Germany,83\n4,,Italy,60\n")))),Object(r.b)("p",null,"Basically, that's it; now, we have a valid data file and a corresponding metadata file. It can be shared with other people or stored without fear of type errors or other problems making research data not reproducible."),Object(r.b)(l.a,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"ls countries.*\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"countries.csv\ncountries.resource.yaml\n"))),Object(r.b)(o.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:"script",script:!0},"import os\n\nfiles = [f for f in os.listdir('.') if os.path.isfile(f) and f.startswith('countries.')]\nprint(files)\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"['countries.csv', 'countries.resource.yaml']\n")))),Object(r.b)("p",null,"In the next articles, we will explore more advanced Frictionless functionality."))}d.isMDXComponent=!0},160:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||r;return a?i.a.createElement(m,o(o({ref:t},c),{},{components:a})):i.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},162:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},176:function(e,t,a){"use strict";var n=a(0),i=a(177);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},177:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},188:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(176),l=a(162),o=a(58),s=a.n(o);var c=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,b=e.values,u=e.groupId,d=e.className,m=Object(r.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,f=Object(n.useState)(o),y=f[0],O=f[1],v=n.Children.toArray(e.children),j=[];if(null!=u){var w=h[u];null!=w&&w!==y&&b.some((function(e){return e.value===w}))&&O(w)}var N=function(e){var t=e.target,a=j.indexOf(t),n=v[a].props.value;O(n),null!=u&&(g(u,n),setTimeout((function(){var e,a,n,i,r,l,o,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,r=e.right,l=window,o=l.innerHeight,c=l.innerWidth,a>=0&&r<=c&&i<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case p:var n=j.indexOf(e.target)+1;a=j[n]||j[0];break;case c:var i=j.indexOf(e.target)-1;a=j[i]||j[j.length-1]}null===(t=a)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},d)},b.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:x,onFocus:N,onClick:N},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},189:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);