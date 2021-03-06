//     ____       __ _____  ____
//    / __ \     / // ___/ / __ \
//   / /_/ /__  / / \__ \ / /_/ /
//  / ____// /_/ / ___/ // _, _/   PixInsight JavaScript Runtime
// /_/     \____/ /____//_/ |_|    PJSR Version 1.0
// ----------------------------------------------------------------------------
// pjsr/PropertyAttribute.jsh - Released 2020-12-12T20:55:24Z
// ----------------------------------------------------------------------------
// This file is part of the PixInsight JavaScript Runtime (PJSR).
// PJSR is an ECMA-262-5 compliant framework for development of scripts on the
// PixInsight platform.
//
// Copyright (c) 2003-2020 Pleiades Astrophoto S.L. All Rights Reserved.
//
// Redistribution and use in both source and binary forms, with or without
// modification, is permitted provided that the following conditions are met:
//
// 1. All redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
//
// 2. All redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
//
// 3. Neither the names "PixInsight" and "Pleiades Astrophoto", nor the names
//    of their contributors, may be used to endorse or promote products derived
//    from this software without specific prior written permission. For written
//    permission, please contact info@pixinsight.com.
//
// 4. All products derived from this software, in any form whatsoever, must
//    reproduce the following acknowledgment in the end-user documentation
//    and/or other materials provided with the product:
//
//    "This product is based on software from the PixInsight project, developed
//    by Pleiades Astrophoto and its contributors (https://pixinsight.com/)."
//
//    Alternatively, if that is where third-party acknowledgments normally
//    appear, this acknowledgment must be reproduced in the product itself.
//
// THIS SOFTWARE IS PROVIDED BY PLEIADES ASTROPHOTO AND ITS CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
// TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
// PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL PLEIADES ASTROPHOTO OR ITS
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
// EXEMPLARY OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, BUSINESS
// INTERRUPTION; PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; AND LOSS OF USE,
// DATA OR PROFITS) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
// ----------------------------------------------------------------------------

/*
 * Property attributes recognized by View.setPropertyValue() and
 * View.propertyAttributes().
 *
 * N.B.: The values of these macros must be the same defined as VATTR_xxx
 * macros in low-level PCL. See pcl/api/APIDefs.h.
 */

// Write-protected: Only the module that created the property can modify it.
export const PropertyAttribute_WriteProtected = 0x00000001;

// Read-protected: Only the module that created the property can read its value
// (implies write protection).
export const PropertyAttribute_ReadProtected = 0x00000002;

// Volatile properties are not stored in processing histories, so they get lost
// across undo/redo operations.
export const PropertyAttribute_Volatile = 0x00000010;

// Permanent properties are not stored in processing histories, but unlike
// volatile properties, they are preserved across undo/redo operations.
export const PropertyAttribute_Permanent = 0x00000020;

// Not serializable: The property will not be stored in projects.
export const PropertyAttribute_NotSerializable = 0x00000040;

// Storable: The property can be stored in image files (when using file formats
// able to store data properties).
export const PropertyAttribute_Storable = 0x00000080;

// Reserved: The property has been reserved by the PixInsight Core application.
// A module or script can request it, but cannot set its value or attributes.
export const PropertyAttribute_Reserved = 0x10000000;

// Special flag used to preserve the existing property attributes across
// function calls.
export const PropertyAttribute_NoChange = 0x80000000;

// ----------------------------------------------------------------------------
// EOF pjsr/PropertyAttribute.jsh - Released 2020-12-12T20:55:24Z
