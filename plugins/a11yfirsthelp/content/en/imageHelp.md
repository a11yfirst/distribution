## Image

### Overview

* People with visual impairments or visual processing disorders need *accessible text descriptions* of informative images.

* Effective text descriptions of informative images can determine the extent to which readers comprehend your document.

* By understanding how to classify images, you will be able to determine whether an image needs an accessible text description and how detailed that description needs to be.

### Type of Image

* An **informative** image adds informational content to the document, and therefore requires at least a short text description. If the image is informationally complex, it requires an additional long description.

* A **decorative** image does not add information to the document, and therefore *does not require an accessible text description*.

### Accessible Descriptions

An accessible text description should accurately present the informational content of the image.

Accessible descriptions of images fall into two categories:

1. **Short description**: required for all *informative* images
1. **Long description**: required for informationally *complex* images

### Short description

* An informative image, whether it is complex or not, requires a short description, which you provide in the *Short description* field.

* The short description is added to the `alt` attribute of the `img` element.

### Tips for writing an effective short description

The following are based on <a href="https://webaim.org/">WebAIM's</a> guidelines for writing effective short descriptions:

* **Be accurate and equivalent** in presenting the same *content* and *function* of the image.

* When **images are used as links** the short description should describe the target of the link.

* **Be succinct.** This means the correct content and function of the image should be presented as succinctly as is appropriate. Typically no more than a few words are necessary, though rarely a short sentence or two may be appropriate. The length should not exceed 100 characters.

* **Do NOT be redundant** or provide the same information as text that is already part of the document.

* **Do NOT use the phrases "image of ..." or "graphic of ..."** to describe the image. Assistive technologies notify the user of the image.  It is your job to describe the purpose or the content of the image.  If the image is a photograph or illustration, etc. of important content, it may be useful to include this in the short description.

* **Do NOT include file names or sizes** as part of the short description.

### What is a complex image?

* Images that convey a significant amount of information, such as charts, graphs, diagrams, scientific photographs and works of art, are complex images.

* A complex image has informational content that is richer and more detailed than simpler images, and cannot be described adequately with a short description. A complex image needs both a short description and a longer, more detailed description.

### Describing a complex image

* Best practices for describing a complex image prescribe that the long description be placed within the document, usually just before or after the image.

* The type of long description you provide for a complex image is dependent on the context of the image in the document.

* Many authors find it both natural and necessary to describe the informational content of a complex image within the document itself, using expository prose or tabular data.

* For example, images of charts can be described by adding a table of the data used to generate the chart.

Follow these three steps for describing a complex image:

1. Insert an adequately long and detailed description of the image within the document, either just before or after the image (or both).

1. Select the *Complex image (requires long description)* checkbox.

1. Select the appropriate option for *Location of long description in document*.

By specifying the location of the long description relative to the image, this information can then be made available to screen reader users.

### Include an editable caption

* A **caption** is an optional visual label supported by CKEditor for an image. It provides an additional way to describe an image that is immediately below and proximate to the image.

* The caption content is specified and is editable in the text box just below the image, once it has been inserted in the document.

* From an accessibility perspective the *caption* and the *short description* should not be the same, but instead should complement each other.

* In some cases, where the *caption* sufficiently describes the purpose of the image, it may not be necessary to provide a *short description*. Alternatively, it may be useful to use the *short description* to provide a slightly more detailed description than the *caption*.

* In other cases the *caption* may be providing detailed information about an image (e.g. the names and rows of people in a group picture), whereby the *short description* should provide a shorter text description of the purpose of the image (e.g. group picture of..).

* Using the caption creates a `figcaption` element contained in a `figure` element.  The `figure` element also contains the `img` element.

### Why image descriptions are important

Adding accessible text descriptions of images is an important part of making documents accessible to the visually impaired who use assistive devices such as screen readers and magnifiers, and to people with visual processing disorders, which make especially complex images more difficult to understand.

When the user cannot see all or part of the image, assistive technologies will read or display the accessible text description(s) associated with the image. This is especially important when the image conveys information that is required for the user to fully understand the information in the document. For people with visual processing disorders, the long description of a complex image helps them to more quickly or completely understand the information being conveyed by the image.

### Summary

The following is some general guidance on writing short text descriptions and providing longer, more detailed descriptions:

* Simple images, photos and logos often can be described in less than 100 characters.

* More complex images like graphs, diagrams and charts need both a short description and a longer, more detailed description, which is typically included in the same document as the image.

* Purely decorative images do not need an accessible text description.

### More information

* <a href="http://accessibility.psu.edu/images/alttext/" target="_resource">Penn State: Image ALT Text</a>

* <a href="https://webaim.org/techniques/alttext/" target="_resource">WebAIM: Alternative Text</a>

* <a href="https://www.w3.org/WAI/tutorials/images/">W3C Web Accessibility Image Tutorial</a>

* <a href="http://diagramcenter.org/" target="_resource">Diagram Center</a>
