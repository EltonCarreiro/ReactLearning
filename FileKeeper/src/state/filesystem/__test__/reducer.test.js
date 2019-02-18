//import { actionTypes, fileSystem as reducer } from "../index";
import * as test from "../index";

const reducer = test.fileSystem;
const actionTypes = test.actionTypes;

const initialState = {
  folders: {},
  files: {}
};

describe("File operations", () => {
  it("should add file into the root directory succesfully", () => {
    const file = {
      key: "1234",
      name: "TestFile",
      extension: "js",
      folderKey: "null",
      content: "content test"
    };
    const expectedState = Object.assign({}, initialState, {
      files: {
        [file.key]: file
      }
    });

    expect(
      reducer(initialState, {
        type: actionTypes.FILE_ADD,
        file: file
      })
    ).toEqual(expectedState);
  });

  it("should rename file succesfully", () => {
    const oldName = "oldName";
    const oldExtension = "cs";
    const newName = "newName";
    const newExtension = "js";

    const file = {
      key: "1234",
      name: oldName,
      extension: oldExtension,
      folderKey: "null",
      content: "content test"
    };

    const initialTestState = Object.assign({}, initialState, {
      files: {
        [file.key]: file
      }
    });

    const newFile = Object.assign({}, file, {
      name: newName,
      extension: newExtension
    });

    const expectedState = Object.assign({}, initialState, {
      files: {
        [file.key]: newFile
      }
    });

    expect(
      reducer(initialTestState, {
        type: actionTypes.FILE_RENAME,
        file: {
          key: file.key,
          newName: newName,
          newExtension: newExtension
        }
      })
    ).toEqual(expectedState);
  });

  it("should delete file succesfully", () => {
    const firstFile = {
      key: "1234",
      name: "first test file",
      extension: "js",
      folderKey: "null",
      content: "first content test"
    };

    const secondFile = {
      key: "4321",
      name: "second test file",
      extension: "cs",
      folderKey: "null",
      content: "second content test"
    };

    const thirdFile = {
      key: "12121",
      name: "third test file",
      extension: "pdf",
      folderKey: "null",
      content: "third content test"
    };

    const initialTestState = Object.assign({}, initialState, {
      files: {
        [firstFile.key]: firstFile,
        [secondFile.key]: secondFile,
        [thirdFile.key]: thirdFile
      }
    });

    const expectedState = Object.assign({}, initialTestState, {
      files: {
        [secondFile.key]: secondFile,
        [thirdFile.key]: thirdFile
      }
    });

    expect(
      reducer(initialTestState, {
        type: actionTypes.FILE_DELETE,
        file: { key: firstFile.key }
      })
    ).toEqual(expectedState);
  });
});

/*describe("Folder operations", () => {
  it("should add folder succesfully", () => {});
  it("should rename file succesfully", () => {});
  it("should delete file succesfully", () => {});
});*/
