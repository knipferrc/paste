import 'ory-editor-core/lib/index.css' // we also want to load the stylesheets
import 'ory-editor-ui/lib/index.css'
import 'ory-editor-plugins-slate/lib/index.css' // Stylesheets for the rich text area plugin

// Require our ui components (optional). You can implement and use your own ui too!
import { DisplayModeToggle, Toolbar, Trash } from 'ory-editor-ui'
// The editor core
import Editor, { Editable, createEmptyState } from 'ory-editor-core'
import React, { Component } from 'react'

// Load some exemplary plugins:
import slate from 'ory-editor-plugins-slate' // The rich text area plugin

require('react-tap-event-plugin')() // react-tap-event-plugin is required by material-ui which is used by ory-editor-ui so we need to call it here

// Define which plugins we want to use. We only have slate and parallax available, so load those.
const plugins = {
  content: [slate()] // Define plugins for content cells
}

// Creates an empty editable
const content = createEmptyState()

// Instantiate the editor
const editor = new Editor({
  plugins,
  // pass the content state - you can add multiple editables here
  editables: [content]
})

class TextEditor extends Component {
  render() {
    return (
      <div>
        <Editable editor={editor} id={content.id} />
        <Trash editor={editor} />
        <DisplayModeToggle editor={editor} />
        <Toolbar editor={editor} />
      </div>
    )
  }
}

export default TextEditor
